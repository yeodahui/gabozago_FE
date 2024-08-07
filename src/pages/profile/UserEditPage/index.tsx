import loadImage from 'blueimp-load-image';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import * as S from './style';

import PageTemplate from '../../../components/common/PageTemplate';
import Heading from '../../../components/common/Heading';

import { TUserProfile } from '../../../assets/types/TUserProfile';
import XIcon from '../../../assets/icons/x.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import CameraCircleIcon from '../../../assets/icons/camera_circle.svg?react';
import KakaoIcon from '../../../assets/icons/kakao.svg?react';
import InputContainer from '../../../components/common/InputContainer';
import ExtraButton from '../../../components/common/ExtraButton';
import usePopup from '../../../hooks/usePopup';
import { BrandIcon } from '../../Auth/SignUpPage/style';
import Typography from '../../../components/common/Typography';
import { patch } from '@_utils/api';
import Nickname from '../../../components/signUp/Nickname';

function UserEditPage() {
  const { nickname, description, avatarURL } = useLoaderData() as TUserProfile;
  const { Popup, popupOpen, popupClose } = usePopup();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [nameValue, setNameValue] = useState(nickname);
  const [descValue, setDescValue] = useState(description);
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);
  const [isNicknameOk, setIsNicknameOk] = useState(false);
  const navigate = useNavigate();

  const [userAvatarURL, setUserAvatarURL] = useState(avatarURL);

  return (
    <PageTemplate nav={null}>
      <Popup>
        <S.PopupContainer>
          <Typography.Headline size="sm">정말 로그아웃 하시겠습니까?</Typography.Headline>
          <div>
            <S.PopupConfirmButton
              onClick={() => {
                popupClose();
              }}
            >
              <Typography.Title size="lg" color="#A6A6A6">
                취소
              </Typography.Title>
            </S.PopupConfirmButton>
            <S.PopupConfirmButton
              onClick={() => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                popupClose();
                navigate('/');
              }}
            >
              <Typography.Title size="lg" color="#5276FA">
                확인
              </Typography.Title>
            </S.PopupConfirmButton>
          </div>
        </S.PopupContainer>
      </Popup>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);

          if (isNicknameOk || descValue !== description || isAvatarChanged) {
            loadImage(
              formdata.get('avatar') as File,
              (img, data) => {
                if (data === undefined) return;
                if (data.imageHead && data.exif) {
                  loadImage.writeExifData(data.imageHead, data, 'Orientation', 1);
                  img.toBlob((blob) => {
                    loadImage.replaceHead(blob, data.imageHead, async (newBlob) => {
                      formdata.set('avatar', newBlob);

                      patch('/user/profile', formdata).then(() => {
                        navigate(-1);
                      });
                    });
                  }, 'image/jpeg');
                } else {
                  patch('/user/profile', formdata).then(() => {
                    navigate(-1);
                  });
                }
              },
              { meta: true, orientation: true, canvas: true },
            );
          }
        }}
      >
        <S.Header>
          <S.CloseIconWrapper>
            <XIcon
              onClick={() => {
                navigate(-1);
              }}
            />
          </S.CloseIconWrapper>
          <Heading size="sm">프로필 수정</Heading>
          <S.SubmitBtn
            type="submit"
            isActive={nameValue !== nickname || descValue !== description || isAvatarChanged}
          >
            완료
          </S.SubmitBtn>
        </S.Header>
        <S.AvatarWrapper>
          {userAvatarURL === '' ? (
            <UserIcon width={90} height={90} />
          ) : (
            <img
              src={userAvatarURL}
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '100%',
                objectFit: 'cover',
              }}
            />
          )}
          <S.CameraIconWrapper htmlFor="avatar">
            <CameraCircleIcon width={24} height={24} />
          </S.CameraIconWrapper>
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            onInput={(e) => {
              if (e.currentTarget.files) {
                const file = e.currentTarget.files[0];
                const reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setUserAvatarURL(reader.result as string);
                  setAvatarFile(file);
                  setIsAvatarChanged(true);
                };
              }
            }}
          />
        </S.AvatarWrapper>
        <Nickname setIsNicknameOk={setIsNicknameOk} defaultValue={nickname} />
        <S.InputContainer>
          <label htmlFor="desc">소개</label>
          <textarea
            defaultValue={description}
            onInput={(e) => {
              setDescValue(e.currentTarget.value);
            }}
            placeholder="나를 한 줄로 소개해보세요! (선택)"
            id="desc"
            name="desc"
            maxLength={60}
          />
          <InputContainer
            inputType="email"
            name="account"
            label="연결된 계정"
            disabled
            required
            explain={
              <>
                <BrandIcon type="kakao">
                  <KakaoIcon />
                </BrandIcon>
                카카오로 가입한 계정이에요
              </>
            }
          />
        </S.InputContainer>
      </S.Form>
      <ExtraButton
        label="로그아웃"
        onClick={() => {
          popupOpen();
        }}
      />
    </PageTemplate>
  );
}

export default UserEditPage;
