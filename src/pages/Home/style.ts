import styled from 'styled-components';

// Header
export const Header = styled.header`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BellWrapper = styled.div<{ isAlert: boolean }>`
  svg {
    width: 24px;
    height: 24px;

    path {
      fill: ${({ theme }) => theme.colors.black.primary};
      /* stroke: ${({ theme }) => theme.colors.black.primary}; */
    }

    circle {
      fill: ${({ theme, isAlert }) =>
        isAlert ? theme.colors.red.primary : theme.colors.black.primary};
    }
  }
`;

// Rectently Trip Bucket
export const TripBucketContainer = styled.section`
  padding-top: 8px;
  padding-bottom: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TripBucketTitle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TripBucketAll = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.font.tertiary};

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.048px;
  }

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: ${({ theme }) => theme.colors.font.tertiary};
    }
  }
`;

// Place Recommendation
export const PlaceRecommendContainer = styled.section`
  width: 100%;

  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

// Articles
export const ArticleContainer = styled.section`
  width: 100%;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ArticleIntroduceTitle = styled.div`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;

  display: flex;
  justify-content: flex-start;

  color: ${({ theme }) => theme.colors.font.primary};
`;

export const ArticleTitle = styled.h4`
  width: 100%;

  display: flex;
  justify-content: flex-start;

  color: ${({ theme }) => theme.colors.font.primary};
`;

export const FontHighlight = styled.span`
  color: ${({ theme }) => theme.colors.blue.primary};
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.colors.blue.primary};
    }
  }
`;

// Footer
export const Footer = styled.footer`
  width: calc(100% + 40px);
  padding: 20px;
  margin-left: -20px;

  background-color: ${({ theme }) => theme.colors.gray.quaternary};

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FooterTitle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.font.secondary};
`;

export const FooterListItem = styled.ol`
  display: grid;
  grid-template-columns: 40% 60%;
  color: ${({ theme }) => theme.colors.font.tertiary};
`;
