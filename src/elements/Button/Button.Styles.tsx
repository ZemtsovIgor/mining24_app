import styled from 'styled-components';

export const ButtonContainer: any = styled.button`
  display: inline-block;
  text-align: center;
  color: var(--white);
  border-radius: var(--border-radius);
  border: none;
  background-color: var(--light-green);
  padding: 12px 20px;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  &:focus {
  }

  &:hover {
  }

  &:active {
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
  }

  &.loading-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 10px;
      width: 16px;
      height: 16px;
      stroke: var(--white);
    }
  }

  &.registration__link {
    margin-bottom: 40px;
    text-decoration: underline;
    background-color: transparent;
    border: none;

    &:hover {
      background-color: transparent;
      border: none;
    }

    &:focus {
      color: var(--light-gray);
      box-shadow: none;
    }
  }
`;
