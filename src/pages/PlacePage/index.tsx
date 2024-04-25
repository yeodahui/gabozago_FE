import { useRef } from "react";

import LocationIcon from "../../assets/icons/location.svg?react";
import PhoneIcon from "../../assets/icons/phone.svg?react";
import TimeIcon from "../../assets/icons/clock.svg?react";
import LinkIcon from "../../assets/icons/web.svg?react";
import CalendarAddIcon from "../../assets/icons/calendar_add_border.svg?react";
import ScrapIcon from "../../assets/icons/bookmark.svg?react"

import BackButton from "../../components/common/BackButton";
import PageHeader from "../../components/common/PageHeader";
import PageTemplate from "../../components/common/PageTemplate";
import PlaceOperateTime from "../../components/journal/PlaceOperateTime";
import useScrapModal from "../../components/video/useScrapModal";
import useCourseModal from "../../components/video/useCourseModal";

import * as S from "./style";
import PlaceGoogleMap from "../../components/journal/GoogleMap";

function PlacePage() {
    const thumbnailWrapperRef = useRef<HTMLDivElement>(null);
    const {CourseModal, courseModalOpen, courseModalClose, setCourseModalData} = useCourseModal();
    const {ScrapModal, scrapModalOpen, scrapModalClose, setScrapModalData} = useScrapModal();

    return(
        <PageTemplate header={<PageHeader LeftItem={<BackButton />}><S.TopBarText>모구모구 제과점</S.TopBarText></PageHeader>} nav={false}>
            <CourseModal />
            <ScrapModal />
            <S.ThumbnailWrapper ref={thumbnailWrapperRef}>
                <img src={"a.png"} />
            </S.ThumbnailWrapper>
            <S.ThumbnailEmpty padding={thumbnailWrapperRef.current?.offsetHeight}/>
            <S.InfomationList>
                <S.InfomationItem>
                    <LocationIcon />
                    <S.InfomationText>부산광역시 수영구 광안로49번길 27</S.InfomationText>
                </S.InfomationItem>
                <S.InfomationItem>
                    <PhoneIcon />
                    <S.InfomationText>070-8772-5959</S.InfomationText>
                </S.InfomationItem>
                <S.InfomationItem>
                    <TimeIcon />
                    <PlaceOperateTime />
                </S.InfomationItem>
                <S.InfomationItem>
                    <LinkIcon />
                    <S.InfomationLink to="/">인스타그램</S.InfomationLink>
                </S.InfomationItem>
            </S.InfomationList>
            <PlaceGoogleMap center={{
                lat: 37,
                lng: 126
            }} markers={[{
                lat: 37,
                lng: 126
            }]}/>
            <S.Buttons>
                <S.Button onClick={() => courseModalOpen()}>
                    <CalendarAddIcon />
                    <span>내 일정에 추가하기</span>
                </S.Button>
                <S.Button onClick={() => scrapModalOpen()}>
                    <ScrapIcon />
                    <span>장소 스크랩에 저장</span>
                </S.Button>
            </S.Buttons>
            <S.RecommendArticleTitle><strong>"모구모구 과자점"</strong>을 포함한 게시글이 있어요</S.RecommendArticleTitle>
            <S.RecommendArticleList>
                <S.RecommendArticleItem>
                    <img src="a.png" />
                    <span>10년지기 친구들과 다녀온 2박3일 123123123</span>
                    <span>여기가 그 유명한 <strong>모구모구 과자점</strong>이였어요!</span>
                </S.RecommendArticleItem>
                <S.RecommendArticleItem>
                    <img src="a.png" />
                    <span>10년지기 친구들과 다녀온 2박3일 123123123</span>
                    <span>여기가 그 유명한 <strong>모구모구 과자점</strong>이였어요!</span>
                </S.RecommendArticleItem>
                <S.RecommendArticleItem>
                    <img src="a.png" />
                    <span>10년지기 친구들과 다녀온 2박3일 123123123</span>
                    <span>여기가 그 유명한 <strong>모구모구 과자점</strong>이였어요!</span>
                </S.RecommendArticleItem>
            </S.RecommendArticleList>
            <S.ThumbnailEmpty padding={50}/>
        </PageTemplate>
    )
}

export default PlacePage;