import styled from 'styled-components';

export const StatisticsContainer: any = styled.div`
  font-family: var(--montserrat);
  
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: var(--black);
    &-wrap {
      margin-bottom: 37px;
    }
  }

  .chart-wrap {
    background: var(--white);
    border-radius: 10px;
    padding: 24px;
  }
  
  .circle {
    &-wrap {
      display: flex;
      gap: 60px;
      margin-top: 24px;
    }

    &-item {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: var(--black);
      
      &:before {
        content: '';
        display: inline-block;
        position: relative;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--light-green);
        margin-right: 12px;
      }
      &.-purple {
        &:before {
          background: #824FF3;
        }
      }
    }
  }
  
  .home {
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: var(--black);

      &_wrap {
        margin-top: 40px;
        margin-bottom: 21px;
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
        margin-top: -2px;
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
