import { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import SettingIcon from '@_icons/setting.svg?react';
import UserIcon from '@_icons/user.svg?react';
import BellIcon from '@_icons/bell_pin_fill.svg?react';
import ChevronRightIcon from '@_icons/chevron_right_expand.svg?react';
import { TUserProfile } from '../../../assets/types/TUserProfile';

import PageTemplate from '../../../components/common/PageTemplate';
import UserTrip from '../../../components/profile/UserTrip';
import UserActivity from '../../../components/profile/UserActivity';
import Typography from '../../../components/common/Typography';

import * as S from './style';
import { get } from '../../../utils/api';

function ProfilePage() {
  const [myNumbericalInfo, setMyNumbericalInfo] = useState<{
    myTravelDay: number;
    myTravelCount: number;
    reactionCount: number;
    favoriteCount: number;
  }>({
    myTravelDay: 0,
    myTravelCount: 0,
    reactionCount: 0,
    favoriteCount: 0,
  });
  const [currentTap, setCurrentTap] = useState<'trip' | 'activity'>('trip');

  const { id, nickname, description, avatarURL } = useLoaderData() as TUserProfile;
  useEffect(() => {
    get<{
      myTravelDay: number;
      myTravelCount: number;
    }>('/user/profile/my-travel-count').then((response) => {
      setMyNumbericalInfo((prev) => ({
        ...prev,
        ...response.data,
      }));
    });

    get<{
      reactionCount: number;
      favoriteCount: number;
    }>('/user/profile/clap-scrap-count').then((response) => {
      setMyNumbericalInfo((prev) => ({
        ...prev,
        ...response.data,
      }));
    });
  }, []);

  return (
    <PageTemplate
      header={
        <S.FixedContainer>
          <S.Header>
            <S.HeaderText>
              <Typography.Headline size="sm" color="inherit">
                MY
              </Typography.Headline>
            </S.HeaderText>
            <S.IconContainer>
              <BellIcon />
              <SettingIcon />
            </S.IconContainer>
          </S.Header>

          <S.UserInfomation>
            <S.UserProfile>
              {avatarURL ? <img src={avatarURL} alt={`${nickname} img`} /> : <UserIcon />}
              <Typography.Title size="lg">{nickname}</Typography.Title>
            </S.UserProfile>
            <S.ProfileEditBtn to="edit">
              <ChevronRightIcon />
            </S.ProfileEditBtn>
          </S.UserInfomation>

          <S.UserIntroduce>
            <Typography.Body size="md" noOfLine={5}>
              {description}
            </Typography.Body>
          </S.UserIntroduce>

          <S.Statics>
            <S.StaticItem>
              <S.StaticItemName>
                <Typography.Title size="md" color="inherit">
                  공감 수
                </Typography.Title>
              </S.StaticItemName>
              <S.StaticItemStat>
                <Typography.Title size="md" color="inherit">
                  {myNumbericalInfo.reactionCount}
                </Typography.Title>
              </S.StaticItemStat>
            </S.StaticItem>
            <S.StaticItem>
              <S.StaticItemName>
                <Typography.Title size="md" color="inherit">
                  스크랩 수
                </Typography.Title>
              </S.StaticItemName>
              <S.StaticItemStat>
                <Typography.Title size="md" color="inherit">
                  {myNumbericalInfo.favoriteCount}
                </Typography.Title>
              </S.StaticItemStat>
            </S.StaticItem>
            <S.StaticItem>
              <S.StaticItemName>
                <Typography.Title size="md" color="inherit">
                  여행 일
                </Typography.Title>
              </S.StaticItemName>
              <S.StaticItemStat>
                <Typography.Title size="md" color="inherit">
                  {myNumbericalInfo.myTravelDay}
                </Typography.Title>
              </S.StaticItemStat>
            </S.StaticItem>
            <S.StaticItem>
              <S.StaticItemName>
                <Typography.Title size="md" color="inherit">
                  여행 수
                </Typography.Title>
              </S.StaticItemName>
              <S.StaticItemStat>
                <Typography.Title size="md" color="inherit">
                  {myNumbericalInfo.myTravelCount}
                </Typography.Title>
              </S.StaticItemStat>
            </S.StaticItem>
          </S.Statics>

          <S.TapNavigationBar>
            <S.TapNavigation
              onClick={() => {
                setCurrentTap('trip');
              }}
              isHighlight={currentTap === 'trip'}
            >
              <Typography.Title size="md">나의 여행</Typography.Title>
            </S.TapNavigation>
            <S.TapNavigation
              onClick={() => {
                setCurrentTap('activity');
              }}
              isHighlight={currentTap === 'activity'}
            >
              <Typography.Title size="md">나의 활동</Typography.Title>
            </S.TapNavigation>
          </S.TapNavigationBar>
          <S.SeperateLine>
            <S.HighLightLine position={currentTap} />
          </S.SeperateLine>
        </S.FixedContainer>
      }
    >
      {(() => {
        switch (currentTap) {
          case 'trip':
            return <UserTrip />;
          case 'activity':
            return <UserActivity />;
          default:
            return null;
        }
      })()}
    </PageTemplate>
  );
}

export default ProfilePage;
