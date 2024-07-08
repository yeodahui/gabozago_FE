// libraries
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import useModal from '../../../hooks/useModal';
import { modalState } from '../../../recoil/modalState';

import { Toaster } from '../Toast/Toaster';
import BottomNavBar from '../BottomNavBar';

import * as S from './style';

interface Props {
  children: ReactNode;
  nav?: ReactNode | 'default' | boolean;
  header?: ReactNode;
}

function PageTemplate({ children, nav = 'default', header }: Props) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [modal, setModal] = useRecoilState(modalState);
  const { Modal, modalOpen, modalClose } = useModal({
    title: modal.title,
  });

  useEffect(() => {
    if (modal.isOpend) {
      modalOpen();
    } else {
      modalClose();
    }
  }, [modal]);

  useEffect(() => {
    setModal((prev) => ({ ...prev, isOpend: false }));
  }, [children]);

  useEffect(() => {
    if (!headerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      setHeaderHeight(entries[0].target.clientHeight);
    });
    resizeObserver.observe(headerRef.current);

    return () => resizeObserver.disconnect();
  }, [headerRef.current]);

  return (
    <S.Container header={!!header}>
      <Modal>{modal.contents}</Modal>
      <Toaster position="bottom-center" reverseOrder={false} containerStyle={{ bottom: 100 }} />
      <S.Header ref={headerRef}>{header && header}</S.Header>
      <S.Content header={headerHeight} nav={!!(nav || nav === 'default')}>
        {children}
      </S.Content>
      {nav === 'default' ? <BottomNavBar /> : nav}
    </S.Container>
  );
}

export default PageTemplate;
