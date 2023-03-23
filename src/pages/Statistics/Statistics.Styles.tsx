import styled from 'styled-components';

export const StatisticsContainer: any = styled.div`
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
        margin-bottom: 24px;
      }
    }
  }
`;
