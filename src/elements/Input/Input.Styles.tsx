import styled from 'styled-components';

export const FormControl: any = styled.div`
  margin: 0 0 9px;

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

  &.-error {
    input {
      box-shadow: 0 0 0 1px var(--red);
      border: 1px solid var(--red);
    }

    p {
      animation: fadeIn 0.8s;
      display: block;
      color: var(--red);
    }
  }
`;

export const FormControlLabel: any = styled.label`
  display: block;
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: var(--gray);
`;

export const FormControlInputWrap: any = styled.div`
  position: relative;
`;

export const FormControlInput: any = styled.input`
  padding: 9px 18px;
  width: 100%;
  color: var(--black);
  background: var(--white);
  border: 1px solid var(--blue);
  border-radius: var(--border-radius);
  outline: none;
  letter-spacing: 0.134065px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    font-weight: 700;
    color: var(--light-gray);
    transition: opacity 0.3s ease-in-out;
  }

  &:disabled {
    color: rgba(25, 57, 50, 0.4);
  }
`;

export const FormControlShow: any = styled.button`
  position: absolute;
  right: 12px;
  top: 10px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  border: 0;
  width: 32px;
  height: 19px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAzNyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM3IDExQzM3IDE3LjYyNzQgMjUuNDQ4NyAyMiAxOC43NzQ2IDIyQzEyLjEwMDYgMjIgMCAxNy42Mjc0IDAgMTFDMCA0LjM3MjU4IDEyLjEwMDYgMCAxOC43NzQ2IDBDMjUuNDQ4NyAwIDM3IDQuMzcyNTggMzcgMTFaIiBmaWxsPSIjM0I4RUZGIi8+CjxlbGxpcHNlIGN4PSIxOC41IiBjeT0iMTEiIHJ4PSI2LjUiIHJ5PSI2IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormControlInputError: any = styled.p`
  margin: 8px 0;
  color: var(--red);
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  display: none;
  white-space: pre-line;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;
