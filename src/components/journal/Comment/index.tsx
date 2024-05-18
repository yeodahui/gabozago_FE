import * as S from "./style";
import Heading from "../../common/Heading";
import SendIcon from "../../../assets/icons/send.svg?react";
import CommentItem, { Comment as TComment } from "../CommentItem";
import { useEffect, useRef, useState } from "react";
import { get, post } from "../../../utils/api";

interface TParsedComment extends TComment {
  replys: TComment[];
}

interface Props {
  id: number;
  commentInputPosition?: "bottom" | "top";
  type: "short-form" | "article" | "video" | "report" | "travelog";
}

function Comment({ id, commentInputPosition = "top", type }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [reply, setReply] = useState<{
    isReplyMode: boolean;
    parentCommentId: number | null;
  }>({
    isReplyMode: false,
    parentCommentId: null,
  });
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<TParsedComment[]>([]);

  const parseComments = (comments: TComment[]): TParsedComment[] => {
    const parsedComments: TParsedComment[] = [];
    const commentMap: { [key: number]: TParsedComment } = {};

    // 1. 모든 댓글을 순회하며 commentMap에 저장
    comments.forEach((comment) => {
      const parsedComment: TParsedComment = {
        ...comment,
        replys: [],
      };
      commentMap[comment.id] = parsedComment;
      parsedComments.push(parsedComment);
    });

    // 2. 모든 댓글을 다시 순회하며 대댓글 관계 설정
    parsedComments.forEach((comment) => {
      if (comment.parentCommentId !== null) {
        const parentComment = commentMap[comment.parentCommentId];
        if (parentComment && parentComment.id !== comment.id) {
          parentComment.replys.push(comment);
        }
      }
    });

    // 3. 배열에서 parentCommentId 있는 댓글 제거
    return parsedComments.filter(
      ({ parentCommentId }) => parentCommentId === null
    );
  };
  const getComments = async (id: number) => {
    const { data } = await get<TComment[]>(`community/${type}/${id}/comment`);
    console.dir(data);
    setComments(parseComments(data));
  };

  const submitComment = async (parentCommentId = null) => {
    await post<{
      shortformId: number;
      parentCommentId: number | null;
      content: string;
    }>(`/community/${type}/comment`, {
      shortformId: id,
      parentCommentId: parentCommentId,
      content: comment,
    });

    getComments(id);
    setComment("");
  };
  useEffect(() => {
    getComments(id);
  }, []);

  return (
    <>
      <S.Header position={commentInputPosition}>
        <Heading size="sm">
          댓글 <S.CommentCountSpan>{comments.length}</S.CommentCountSpan>
        </Heading>
      </S.Header>
      <S.CommentInputForm
        position={commentInputPosition}
        onSubmit={(e) => {
          e.preventDefault();
          submitComment(reply.isReplyMode && reply.parentCommentId);
        }}
      >
        <S.UserProfileImg />
        <S.CommentInputControlBox>
          <S.CommentInput
            type="text"
            placeholder="댓글 달기..."
            maxLength={1500}
            value={comment}
            ref={inputRef}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <S.SendButton disabled={comment.length === 0} type="submit">
            <SendIcon />
          </S.SendButton>
        </S.CommentInputControlBox>
      </S.CommentInputForm>
      <S.Contents
        position={commentInputPosition}
        onClick={() => {
          if (reply.isReplyMode) {
            setReply({ isReplyMode: false, parentCommentId: null });
          }
        }}
      >
        {comments && comments.length !== 0 ? (
          <S.CommentList>
            {comments.map((item) => (
              <li key={`comment-shortform-${item.id}`}>
                <CommentItem
                  {...item}
                  inputRef={inputRef}
                  reply={reply}
                  setReply={setReply}
                  type={type}
                  // isMine={false}
                  isMine={true} // @todo: 현재 내 댓글인지 알 수 있는 방법이 없음, 추후 수정 필요
                />
              </li>
            ))}
          </S.CommentList>
        ) : (
          <S.NoCommentBox>
            <p>아직 댓글이 없습니다.</p>
            <p>가장 먼저 댓글을 남겨 보세요!</p>
          </S.NoCommentBox>
        )}
      </S.Contents>
    </>
  );
}

export default Comment;
