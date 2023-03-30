import styled from 'styled-components';

export const ContractContainer: any = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 48.1em) {
    .home {
      &-title {
        &_wrap {
          margin-top: 32px;
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
  }
`;

export const ContractItemContainer: any = styled.div`
  .title {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: var(--black);
    &-wrap {
      
    }
  }
  
  .chart-wrap {
    background: var(--white);
    border-radius: 10px;
    padding: 24px;
  }
  
  .btn {
    background: none;
    border: 0;
    color: #C50A0A;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 0;
    margin-top: 20px;
  }
  
  .modal-btn {
    flex: 1;
  }
`;
