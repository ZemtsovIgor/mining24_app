import styled from 'styled-components';

export const ContractsWrapper: any = styled.div`
  margin-bottom: -7px;
  
  .contracts {
    background: var(--white);
    border-radius: 10px;
    padding: 19px 20px;
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

        grid-template-columns: 1.1fr 1.1fr 1.1fr 1.1fr 0.8fr;
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
        margin: 12px 0 11px;
        align-items: center;

        grid-template-columns: 1.1fr 1.1fr 1.1fr 1.1fr 0.8fr;
      }

      &__cell {
        display: flex;
        flex-direction: column;

        &_text {
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: var(--black);
        }
        
        &_label {
          display: none;
          font-weight: 500;
          font-size: 12px;
          line-height: 24px;
          color: #060931;
        }
      }



      &_chart {

      }
    }
  }

  @media only screen and (max-width: 48.1em) {
    margin-bottom: 2px;
    
    .contracts {
      padding: 15px 16px 0;
      
      &-header {
        &__wrap {
          display: none;
        }
      }
      
      &-body {
        &__cell {
          &:first-child {
            grid-area: name;
          }
          
          &:nth-child(2) {
            grid-area: hashrate;
          }

          &:nth-child(3) {
            grid-area: until;
          }

          &:nth-child(4) {
            grid-area: earned;
          }

          &:last-child {
            grid-area: statistics;
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
          }

          &_label {
            display: block;
          }
        }
        
        &__row {
          grid-template-columns: 5fr 1fr 1fr 1fr 5fr;
          grid-template-areas:
            'name name name name name'
            'hashrate until earned earned earned'
            'statistics statistics statistics statistics statistics';
          border-bottom: 1px solid #E2E4EB;
          padding: 4px 12px 24px;
          margin: 7px 0 6px;

          &:last-child {
            border-bottom: 0;
          }
        }
      }
    }
  }
`;
