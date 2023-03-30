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

    .wallet {
      &-share {
        margin-top: 17px;
        &__container {
          flex: 1;
          padding: 27px 16px 11px;
        }

        &__image {
          width: 71%;
          &_wrap {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        &__rewards {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: var(--black);

          &_wrap {
            margin-bottom: 17px;
          }
        }
        
        &__title {
          &_wrap {
            margin-bottom: 15px;
          }
        }
        
        &__input {
          &_wrap {
            width: 100%;
          }
        }

        &__ref {
          padding-top: 24px;
        }

        &__icon {
          width: 16px;
          margin: 0 11px;
        }
        
        &.-big {
          .wallet-share__image_wrap {
            width: 100%;
          }
        }
      }
    }
  }
`;
