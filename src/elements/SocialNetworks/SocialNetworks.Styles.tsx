import styled from 'styled-components';

export const SocialNetworksStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
    transition: fill 0.3s ease-in-out;
  }

  .link:not(:last-child) {
    margin-right: 12px;
  }

  .link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--light-green);
    border-radius: 10px;

    &:hover {
      svg {
      }
    }
  }
`;
