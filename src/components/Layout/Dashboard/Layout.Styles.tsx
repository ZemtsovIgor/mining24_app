import styled from 'styled-components';

export const SiteWrapper: any = styled.div`
  height: 100%;
  min-height: 100vh;
  background: var(--light-blue);
`;

export const MainContainer: any = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
`;

export const Content: any = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 48.1em) {
    width: 100%;
  }
`;
