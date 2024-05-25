import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import SettingIcon from "../../../assets/icons/setting.svg?react";
import UserIcon from "../../../assets/icons/user.svg?react";
import { TUserProfile } from "../../../assets/types/TUserProfile";

import PageTemplate from "../../../components/common/PageTemplate";
import UserTrip from "../../../components/profile/UserTrip";
import UserActivity from "../../../components/profile/UserActivity";
import Typography from "../../../components/common/Typography";

import * as S from "./style";


function ProfilePage() {
  const navigate = useNavigate();
  const [headerHeight, setHeaderHeight] = useState<number>(200);
  const [currentTap, setCurrentTap] = useState<"trip" | "activity">(
    "trip"
  );

  const { id, nickname, description, avatarURL, clapCount, scrapCount, myTravelCount, myTravelDay } =
    useLoaderData() as TUserProfile;
  const FixedHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (FixedHeaderRef.current) {
      setHeaderHeight(FixedHeaderRef.current.offsetHeight);
    }
  }, [FixedHeaderRef.current]);

  return (
    <PageTemplate>
      <S.SettingIconWrapper onClick={() => {navigate('/profile/settings')}}>
        <SettingIcon />
      </S.SettingIconWrapper>
      <S.FixedContainer ref={FixedHeaderRef}>
        <S.Header>
          <S.UserProfile>
            {
              avatarURL ?
              <img src={avatarURL} />
              :
              <UserIcon />
            }
            <Typography.Title size="lg">{nickname}</Typography.Title>
          </S.UserProfile>
            <S.ProfileEditBtn
              onClick={() => {
                navigate(`edit`);
              }}
            >
              <Typography.Title size="md" color="inherit">프로필 수정</Typography.Title>
            </S.ProfileEditBtn>
        </S.Header>

        <S.UserIntroduce>
          <Typography.Body size="md" noOfLine={5}>{description}</Typography.Body>
        </S.UserIntroduce>

        <S.Statics>
          <S.StaticItem>
            <S.StaticItemName>
              <Typography.Title size="md" color="inherit">공감 수</Typography.Title>
            </S.StaticItemName>
            <S.StaticItemStat>
              <Typography.Title size="md" color="inherit">{clapCount}</Typography.Title>  
            </S.StaticItemStat>
          </S.StaticItem>
          <S.StaticItem>
            <S.StaticItemName>
              <Typography.Title size="md" color="inherit">스크랩 수</Typography.Title>
            </S.StaticItemName>
            <S.StaticItemStat>
              <Typography.Title size="md" color="inherit">{scrapCount}</Typography.Title>  
            </S.StaticItemStat>
          </S.StaticItem>
          <S.StaticItem>
            <S.StaticItemName>
              <Typography.Title size="md" color="inherit">여행 일</Typography.Title>
            </S.StaticItemName>
            <S.StaticItemStat>
              <Typography.Title size="md" color="inherit">{myTravelDay}</Typography.Title>  
            </S.StaticItemStat>
          </S.StaticItem>
          <S.StaticItem>
            <S.StaticItemName>
              <Typography.Title size="md" color="inherit">여행 수</Typography.Title>
            </S.StaticItemName>
            <S.StaticItemStat>
              <Typography.Title size="md" color="inherit">{myTravelCount}</Typography.Title>  
            </S.StaticItemStat>
          </S.StaticItem>
        </S.Statics>

        <S.TapNavigationBar>
          <S.TapNavigation
            onClick={() => {
              setCurrentTap("trip");
            }}
            isHighlight={currentTap === "trip"}
          >
            <Typography.Title size="md">나의 여행</Typography.Title>
          </S.TapNavigation>
          <S.TapNavigation
            onClick={() => {
              setCurrentTap("activity");
            }}
            isHighlight={currentTap === "activity"}
          >
            <Typography.Title size="md">나의 활동</Typography.Title>
          </S.TapNavigation>
        </S.TapNavigationBar>
        <S.SeperateLine>
          <S.HighLightLine position={currentTap} />
        </S.SeperateLine>
      </S.FixedContainer>
      
      <S.Content FixedContainerHeight={headerHeight}>
        {(() => {
          switch (currentTap) {
            case "trip":
              return <UserTrip />;
            case "activity":
              return <UserActivity />;
            default:
              return null;
          }
        })()}
      </S.Content>
    </PageTemplate>
  );
}

export default ProfilePage;
