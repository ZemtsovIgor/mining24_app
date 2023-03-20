import styled from 'styled-components';

export const ContractsWrapper: any = styled.header`
  .contracts {
    background: var(--white);
    border-radius: 10px;
    padding: 19px 29px 11px;
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
      height: 47px;
      display: flex;
      align-items: center;

      &__wrap {
        display: grid;
        grid-gap: 1em;
        align-items: center;
        border-bottom: 1px solid #EFEFEF;

        grid-template-columns: 2.5fr 1fr 1.1fr 1.4fr 1.2fr;

        @media screen and (max-width: 900px) {
          width: 770px;
          grid-template-columns: 2.5fr 1fr 1.1fr 1.4fr 1.2fr;
          > *:first-child {
            display: none;
          }
        }
      }
    }

    &-body {
      &__wrap {
        display: flex;
        flex-direction: column;
      }

      &__row {
        display: grid;
        grid-gap: 1em;
        margin: 12px 0;
        align-items: center;

        grid-template-columns: 2.5fr 1fr 1.1fr 1.4fr 1.2fr;

        @media screen and (max-width: 900px) {
          width: 770px;
          grid-template-columns: 2.5fr 1fr 1.1fr 1.4fr 1.2fr;
          > *:first-child {
            display: none;
          }
        }
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



      &_chart {

      }
    }
  }
`;
