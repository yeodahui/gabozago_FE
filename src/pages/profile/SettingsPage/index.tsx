import * as S from "./style";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "../../../assets/icons/chevron_right.svg?react";
import usePopup from "../../../hooks/usePopup";
import { useEffect, useState } from "react";
import { get } from "../../../utils/api";

function SettingsPage() {
  const navigate = useNavigate();
  const { Popup, popupOpen, popupClose } = usePopup();
  const [username, setUsername] = useState<string>("-");
  const settings = [
    {
      title: "고객 지원",
      items: [
        {
          text: "공지사항",
          path: "/cscenter/announce",
        },
        {
          text: "고객센터 • 도움말",
          path: "/cscenter",
        },
        {
          text: "의견보내기",
          path: "/cscenter/feedback",
        },
      ],
    },
    {
      title: "서비스 정보",
      items: [
        {
          text: "서비스 이용 약관",
          path: "/terms/01",
        },
        {
          text: "개인정보 수집 및 이용동의",
          path: "/terms/02",
        },
        {
          text: "위치 서비스 이용 동의",
          path: "/terms/03",
        },
        {
          text: "오픈소스 라이센스",
          path: "/terms/04",
        },
      ],
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log(token);
    if (token) {
      get<{
        avatarURL: string;
        name: string;
        desc: string;
      }>(`${import.meta.env.VITE_BASE_URL}user/profile`, {
        // headers: { Authorization: `Bearer ${token}` },
        headers: { Authorization: token },
      });
    } else {
      alert("유저 정보 가져오기 실패: 로그인이 필요합니다.");
    }
  }, []);

  return (
    <PageTemplate header={<PageHeader>설정</PageHeader>}>
      <Popup>
        <S.PopupContainer>
          <p>정말 로그아웃 하시겠습니까?</p>
          <div>
            <S.PopupConfirmButton
              type={"secondary"}
              onClick={() => {
                popupClose();
              }}
            >
              취소
            </S.PopupConfirmButton>
            <S.PopupConfirmButton
              type={"primary"}
              onClick={() => {
                popupClose();
                // @todo: 로그아웃
              }}
            >
              확인
            </S.PopupConfirmButton>
          </div>
        </S.PopupContainer>
      </Popup>
      <S.ContentsWrapper>
        <S.UserSettingButton onClick={() => navigate(`/profile/edit`)}>
          <div>
            <p>{username}</p>
            <p>프로필 및 계정 설정</p>
          </div>
          <ChevronRightIcon />
        </S.UserSettingButton>
        <S.SettingsContainer>
          {settings.map((group) => (
            <div>
              <S.SettingTitleParagraph>{group.title}</S.SettingTitleParagraph>
              <ol>
                {group.items.map((item) => (
                  <S.SettingItem
                    onClick={() => {
                      navigate(item.path);
                    }}
                  >
                    {item.text}
                    <ChevronRightIcon />
                  </S.SettingItem>
                ))}
              </ol>
            </div>
          ))}
          <S.LogOutButton
            onClick={() => {
              popupOpen();
            }}
          >
            로그아웃
          </S.LogOutButton>
        </S.SettingsContainer>
      </S.ContentsWrapper>
    </PageTemplate>
  );
}

export default SettingsPage;
