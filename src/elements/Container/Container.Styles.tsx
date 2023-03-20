import styled from 'styled-components';

export const ContainerBlock: any = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 26px;
  
  .modal {
    &-title {
      margin: 0;
      margin-bottom: 24px;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      color: var(--black);
      text-align: center;
    }
    
    &-btn {
      &__wrap {
        display: flex;
        gap: 12px;
      }
      
      &.-gray {
        background: #979797;
      }
    }
  }

  @media (max-width: 992px) {
    padding: 16px;
  }
`;
