import styled from 'styled-components';

export const SettingsContainer: any = styled.div`
  font-family: var(--montserrat);
  
  .home {
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: var(--black);

      &_wrap {
        margin-bottom: 32px;
      }
    }

    &-subtitle {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: var(--black);

      &_wrap {
        margin-bottom: 20px;
        margin-top: 32px;
      }
    }
  }
  
  .settings {
    
    &-input {
      margin: 0 0 9px;
    }
    
    &-form {
      margin-bottom: 56px;
    }
    
    &__button {
      width: 100%;
      padding: 8px 20px;
      
      &-wrap {
        margin-top: 19px;
      }
    }
  }

  @media only screen and (max-width: 48.1em) {
    .home {
      &-title {
        &_wrap {
          margin-top: 25px;
          margin-bottom: 15px;
        }
      }

      &.-big {

      }
    }

    .home-title_wrap {
      &.-big {
        margin-top: -3px;
        margin-bottom: 16px;

        & .home-title {
          font-weight: 700;
          font-size: 28px;
          line-height: 36px;
          color: var(--black);
        }
      }
    }
  }
`;
