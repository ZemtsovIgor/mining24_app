import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoStyles: any = styled(Link)`
  img {
    width: 100%;
  }

  &.header__logo {
    margin-right: auto;
    max-width: 211px;
  }

  &.sidebar__logo {
    display: none;
  }

  @media (max-width: 992px) {
    display: none;

    &.registration__logo {
      display: block;
      margin-bottom: 50px;

      img {
        max-width: 200px;
      }
    }

    &.sidebar__logo {
      display: block;
      max-width: 106px;
    }
  }
`;
