import styled from 'styled-components';

import { FormControl } from '../Input/Input.Styles';

export const PhoneInputStyles = styled(FormControl)`
  position: relative;

  input {
    padding: 12px 20px;
    width: 100%;
    color: var(--black);
    background: var(--white);
    border-radius: var(--border-radius);
    border: 0;
    box-shadow: 4px 4px 40px rgba(39, 39, 41, 0.05);
    outline: none;
    letter-spacing: 0.134065px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    transition: box-shadow 0.3s ease-in-out;

    &:disabled {
      color: rgba(255, 255, 255, 0.65);
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    textarea:-webkit-autofill:active,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus,
    select:-webkit-autofill:active {
      -webkit-text-fill-color: var(--black);
      transition: background-color 5000s ease-in-out 0s;
      filter: none;
    }
  }

  &.-error input {
    box-shadow: 0 0 0 1px var(--red);
  }
`;
