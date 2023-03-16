import styled from 'styled-components';

export const ButtonContainer: any = styled.button`
  display: inline-block;
  text-align: center;
  color: var(--white);
  border-radius: var(--border-radius);
  border: none;
  background-color: var(--blue);
  padding: 12px 56px;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  cursor: pointer;
  outline: none;

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

  &.xl {
    padding: 14px 40px;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
  }

  &.lg {
    padding: 10px 40px;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
  }

  &.md {
    padding: 9px 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
  }

  &.sm {
    padding: 5px 40px;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }

  &.width {
    width: 100%;
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

  &.-light {
    border: 1px solid var(--light-blue);
    background-color: var(--light-blue);
    color: var(--dark-blue);

    &:focus {
      color: var(--dark-blue);
      box-shadow: 0 0 0 2px #c5d5fb;
    }

    &:hover {
      color: var(--dark-blue);
      background-color: #c5d5fb;
      border-color: #c5d5fb;
    }

    &:active {
      color: var(--white);
      background-color: #6100c2;
      border-color: #6100c2;
    }

    &:disabled,
    &[disabled] {
      color: rgba(255, 255, 255, 0.55);
      background-color: rgba(97, 0, 194, 0.7);
      border-color: transparent;
      cursor: not-allowed;
    }

    &.loading-btn {
      svg {
        stroke: var(--dark-blue);
      }
    }
  }
`;
