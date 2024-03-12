import ShortFormList from "../shortform/ShortFormList";
import * as S from "./style";

function Journals() {
  const shortForms = [
    {
      id: 0,
      title: "15초 여수 맛집투어 정리!",
      location: "여수",
      thumbnail: "https://placehold.co/400x600",
    },
    {
      id: 1,
      title: "15초 여수 맛집투어 정리!",
      location: "경주",
      thumbnail: "https://placehold.co/400x600",
    },
    {
      id: 2,
      title:
        "각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.",
      location: "지역",
      thumbnail: "https://placehold.co/400x600",
    },
    {
      id: 3,
      title: "당신은 창의적이고 독특한 아이디어를 가진 탁월한 사람입니다",
      location: "",
      thumbnail: "https://placehold.co/400x600",
    },
    {
      id: 4,
      title:
        "당신은 창의적이고 독특한 아이디어를 가진 탁월한 사람입니다. 당신의 창의성과 독립적인 사고는 다른 사람들에게 영감을 주고 새로운 시각을 제공합니다. 당신은 문제에 대한 해결책을 찾는 것이 뛰어나며, 어려운 상황에서도 차분하고 명확한 판단력을 가지고 있습니다.",
      location: "지역",
      thumbnail: "https://placehold.co/400x600",
    },
  ];
  return (
    <div>
      <p>필터 자리</p>
      <ShortFormList data={shortForms} />
    </div>
  );
}

export default Journals;