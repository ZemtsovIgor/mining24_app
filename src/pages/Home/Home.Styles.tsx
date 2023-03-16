import styled from 'styled-components';

export const HomeTitles: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & .home-title {
    margin: 0;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
  }

  & .home-titles__count {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: rgba(25, 57, 50, 0.3);

  }

  @media (max-width: 765px) {
    flex-direction: column;
  }
`;
