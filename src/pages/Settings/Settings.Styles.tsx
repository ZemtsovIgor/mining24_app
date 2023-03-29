import styled from 'styled-components';

export const SettingsContainer: any = styled.div`
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
      }
    }
  }
  
  .settings {
    &-form {
      margin-bottom: 56px;
    }
    
    &__button {
      width: 100%;
      &-wrap {
        
      }
    }
  }
`;
