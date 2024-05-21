import * as S from "./style";
import { useEffect, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import { get } from "../../../utils/api";

interface THistoryList {
  id: string;
  title: string;
  date: string;
  status: "답변대기" | "답변완료";
}

function InquiryHistoryPage() {
  const [data, setData] = useState<THistoryList[]>([
    // {
    //   id: "0",
    //   title:
    //     "긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어",
    //   date: "2024-03-18",
    //   status: "답변대기",
    // },
    // {
    //   id: "20",
    //   title:
    //     "짧은단어짧은단어짧은단어 긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어긴단어",
    //   date: "2024-03-18",
    //   status: "답변완료",
    // },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      get<{
        next: string | null;
        previous: string | null;
        results: THistoryList[];
      }>(`${import.meta.env.VITE_BASE_URL}settings/support/help/ask`).then(
        ({ data }) => setData(data.results)
      );
    }
  }, []);

  return (
    <PageTemplate nav={false} header={<PageHeader>내 문의 내역</PageHeader>}>
      {data.length === 0 ? (
        <S.NoDataTextContainer>
          <p className="no_data-heading">문의하신 내역이 없습니다.</p>
          <p className="no_data-desc">
            문의 내용은 고객센터/도움말의
            <br />
            서비스 문의하기를
            <br />
            클릭하여 작성해주세요.
          </p>
        </S.NoDataTextContainer>
      ) : (
        <S.List>
          {data.map(({ id, title, date, status }) => (
            <li>
              <p>{title}</p>
              <div>
                <S.StatusSpan
                  type={status === "답변대기" ? "active" : "inactive"}
                >
                  {status}
                </S.StatusSpan>
                <S.DateSpan>{date}</S.DateSpan>
              </div>
            </li>
          ))}
        </S.List>
      )}
    </PageTemplate>
  );
}

export default InquiryHistoryPage;
