import styled from 'styled-components';

export const ReferralsWrapper: any = styled.div`
  margin-bottom: -7px;
  
  .referrals {
    background: var(--white);
    border-radius: 10px;
    padding: 19px 20px 11px;
    width: 100%;
    flex-direction: column;
    gap: 13px;

    &:nth-child(1) {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 900px) {
      overflow: hidden;
      overflow-x: scroll;
    }

    &-header {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: var(--black);
      cursor: pointer;
      display: flex;
      align-items: center;

      &__wrap {
        display: grid;
        padding: 0 12px;
        grid-gap: 1em;
        align-items: center;
        border-bottom: 1px solid #EFEFEF;

        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    &-body {
      &__wrap {
        display: flex;
        flex-direction: column;
        padding: 18px 12px 0;
      }

      &__row {
        display: grid;
        grid-gap: 1em;
        margin: 16px 0;
        align-items: center;

        grid-template-columns: 1fr 1fr 1fr;
      }

      &__cell {
        display: flex;

        &_text {
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: var(--black);
        }
      }
    }
  }

  @media only screen and (max-width: 48.1em) {
    margin-bottom: 2px;

    .referrals {
      padding: 9px 4px 6px;

      &-header {
        &__wrap {
          display: none;
        }
      }

      &-body {
        &__cell {
          &:first-child {
            grid-area: email;
          }

          &:nth-child(2) {
            grid-area: date;
            justify-content: flex-end;
          }

          &:last-child {
            grid-area: sum;
          }
          
          &_text {
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;

            &.-title {
              font-weight: 600;
              font-size: 16px;
              line-height: 24px;
            }

            &.-date {
              font-weight: 400;
              font-size: 14px;
              line-height: 24px;
              color: #8A92AD;
            }
          }
        }

        &__row {
          grid-template-columns: 1fr 1fr 2fr;
          grid-template-areas:
            'email email date'
            'sum sum sum';
          border-bottom: 1px solid #E2E4EB;
          padding: 12px 12px 14px;
          margin: 0;
          gap: 8px;

          &:last-child {
            border-bottom: 0;
          }
        }
      }
    }
  }
`;
