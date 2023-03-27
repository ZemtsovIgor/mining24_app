import styled from 'styled-components';

export const ReferralsContainer: any = styled.div`
  .wallet {
    &-share {
      background: var(--white);
      box-shadow: 0 4px 28px rgba(0, 0, 0, 0.03);
      border-radius: 10px;
      margin-top: 45px;

      &__wrap {
        display: flex;
        width: 100%;
      }

      &__container {
        padding: 32px 17px 31px 32px;
        width: 100%;
      }

      &__cell {
      }

      &__image {
        &_wrap {
          display: flex;
          width: 55%;
        }
      }

      &__ref {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 18px;
        width: 100%;
      }

      &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: var(--black);

        &_wrap {
          margin-bottom: 20px;
        }
      }

      &__rewards {
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: var(--black);

        &_wrap {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
      }

      &__icon {
        margin: 0 16px;
      }

      &__input {
        &_wrap {
          width: 66%;
        }
      }

      &.-big {
        margin-top: 0;
        
        .wallet {
          &-share {
            &__image {
              &_wrap {
                display: flex;
                width: 77%;
              }
            }

            &__ref {
              padding-top: 14px;
            }
          }
        }
      }
    }
  }
`;
