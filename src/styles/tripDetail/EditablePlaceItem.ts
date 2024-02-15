import styled from "styled-components";

export const ListItem = styled.li`
  margin: 0 -20px;
  width: calc(100% + 40px);
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
`;

export const Wrapper = styled.div<{ isSelected: boolean }>`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: nowrap;

  cursor: pointer;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.blue04 : theme.white};
`;
export const PlaceInfo = styled.div`
  flex-grow: 1;
  padding: 10px 16px;
  display: flex;

  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue05};

  & > span {
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;

    font-size: 10px;
    line-height: 22px;
    border-radius: 50%;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.blue03};
  }

  & > div {
    color: ${({ theme }) => theme.black};

    p:last-of-type {
      font-size: 11px;
      line-height: 22px;
      font-weight: 400;
      color: ${({ theme }) => theme.gray01};
    }
  }
`;
