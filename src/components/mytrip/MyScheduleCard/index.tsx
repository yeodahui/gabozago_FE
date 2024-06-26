import * as S from "./style";

import LocationIcon from "../../../assets/icons/location.svg?react";
import MeatballsMenuIcon from "../../../assets/icons/meatballsMenu.svg?react";

import Button from "../../common/Button";
import Heading from "../../common/Heading";

interface Props {
    thumbnailURL?: string;
    title: string;
    startDate: string;
    endDate: string;
    places: string[];
    highlight: boolean;
}

function MyScheduleCard({
    thumbnailURL,
    title,
    startDate,
    endDate,
    places,
    highlight
}: Props) {
    return (
        <S.Card highlight={highlight}>
            <S.InfoContainer>
                <S.ThumbnailWrapper>
                    {thumbnailURL && <img src={thumbnailURL} alt={title} />}
                </S.ThumbnailWrapper>
                <>
                    <Heading size="sm" noOfLine={1} maxWidth={110}>
                        {title}
                    </Heading>
                    <S.Date>
                        {startDate} - {endDate}
                    </S.Date>
                </>
                <S.MenuIcon>
                    <MeatballsMenuIcon />
                </S.MenuIcon>
            </S.InfoContainer>
            <S.ButtonContainer>
                <S.Places>
                    <LocationIcon />
                    {places.map((item) => (
                        <S.Place>{item}</S.Place>
                    ))}
                </S.Places>
                <Button size="sm" active={true} type="normal">
                    여행 수정하기
                </Button>
            </S.ButtonContainer>
        </S.Card>
    );
}

export default MyScheduleCard;
