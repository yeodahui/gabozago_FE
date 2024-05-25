import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  overflow-y: auto;
  word-break: keep-all;
`;

export const InfoContainer = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.gray04};

  display:flex;
  flex-direction: column;
  gap:5px;

  p.title {
    color: ${({ theme }) => theme.black};
  }

  p.date {
    color: ${({ theme }) => theme.gray01};
  }
`;

export const ContentsContainer = styled.div`
  padding: 25px 18px;

  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
`;
