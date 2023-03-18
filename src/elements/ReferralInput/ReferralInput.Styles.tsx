import styled from 'styled-components';

import { FormControl, FormControlInput } from '../Input/Input.Styles';

export const ReferralInputBlock: any = styled(FormControl)`
  display: flex;
  align-items: center;
  position: relative;
  background: #F7F7FA;
  border: 1px solid #E2E4EB;
  border-radius: 4px;

  .ref-input {
    &__wrap {
      display: flex;
      flex: 1;
      flex-direction: column;
      position: relative;
      height: 100%;
    }

    &__text {
      letter-spacing: -0.0025em;
      font-weight: 500;
      font-size: 11px;
      line-height: 16px;
      color: rgba(25, 57, 50, 0.5);
    }
  }
`;

export const ReferralField: any = styled(FormControlInput)`
  user-select: none;
  overflow-x: scroll;
  background: none;
  border-radius: 0;
  border: 0;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5F698D;
  
  &::selection {
    color: #5F698D;
    background-color: transparent;
  }

  &:disabled {
    color: #5F698D;
  }
`;

export const ReferralCopy: any = styled.button`
  display: flex;
  background: #1BE046;
  border-radius: 0 4px 4px 0;
  border: 0;
  outline: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;

  &[data-title] {
    &:before {
      content: attr(data-title);
      position: absolute;
      top: 100%;
      padding: 10px;
      font-size: 12px;
      line-height: 15px;
      color: var(--white);
      background: #292f39;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      border-radius: var(--border-radius);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    }

    &:hover {
      &:before {
        opacity: 1;
        visibility: visible;
        content: attr(data-title);
      }
    }
  }

`;
