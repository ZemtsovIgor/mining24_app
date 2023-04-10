import styled from 'styled-components';

export const ProfileContainer: any = styled.div`
  .profile {
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
  
  .verification {
    background: conic-gradient(from 194.89deg at 30.26% -12.73%, rgba(0, 250, 70, 0.13) -66.95deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 142.5deg, rgba(0, 10, 250, 0.13) 217.5deg, rgba(0, 250, 70, 0.13) 293.05deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 234.81deg at 102.25% 28.97%, rgba(0, 250, 70, 0.13) -136.87deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 250, 70, 0.13) 223.13deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 223.81deg at 103.05% -6.34%, rgba(250, 225, 0, 0.13) -67.77deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 130, 250, 0.13) 244.86deg, rgba(250, 225, 0, 0.13) 292.23deg, rgba(255, 255, 255, 0) 365.23deg), #F5F9FF;
    border: 1px solid #CCF7CB;
    border-radius: 8px;
    padding: 32px 24px;
    margin-left: 23px;
    
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: var(--black);
      
      &__wrap {
        
      }
    }

    &-result {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #DD1111;

      &__wrap {
        margin-top: 8px;
      }
    }

    &-button {
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      padding: 10px 16px;
      
      &__wrap {
        margin-top: 23px;
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
        margin-top: 8px;
        margin-bottom: 16px;

        & .home-title {
          font-weight: 700;
          font-size: 28px;
          line-height: 36px;
          color: var(--black);
        }
      }
    }
    
    .profile {
      flex-direction: column-reverse;

      &-form {
        margin-bottom: 0;
        margin-top: 30px;
      }
      
      &-input {
        margin: 0 0 12px;
      }
      
      &__select {
        margin: 0 0 12px;
      }
    }

    .verification {
      margin-left: 0;

      &-button {
        width: 100%;
      }
    }
  }
`;
