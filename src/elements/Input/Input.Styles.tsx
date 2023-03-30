import styled from 'styled-components';

export const FormControl: any = styled.div`
  margin: 0 0 16px;

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
      box-shadow: 4px 4px 40px rgba(176, 22, 22, 0.07);
      border: 1px solid var(--red);
    }

    .placeholder {
      animation: fadeIn 0.8s;
      display: block;
      color: var(--red);
    }
  }

  @media only screen and (max-width: 48.1em) { //768px
    margin: 0 0 8px;
  }
`;

export const FormControlInputWrap: any = styled.div`
  position: relative;
  
  .placeholder {
    display: flex;
    align-items: center;
    position: absolute;
    margin: 12px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: var(--light-gray);
    top: 0;
    left: 20px;
    transition: all 0.2s;
    transform-origin: 0% 0%;
    background: none;
    pointer-events: none;
  }

  & input:not(:placeholder-shown) + .placeholder,
  & input:focus + .placeholder {
    transform: scale(0.8) translateY(-30px);
  }

  @media only screen and (max-width: 48.1em) { //768px
    .placeholder {
      font-size: 16px;
      line-height: 24px;
      left: 15px;
    }

    & input:not(:placeholder-shown) + .placeholder,
    & input:focus + .placeholder {
      transform: scale(0.75) translateY(-25px);
    }
  }
`;

export const FormControlInput: any = styled.input`
  padding: 12px 20px;
  width: 100%;
  color: var(--black);
  background: var(--white);
  border-radius: var(--border-radius);
  border: 1px solid #E2E4EB;
  box-shadow: 4px 4px 40px rgba(39, 39, 41, 0.05);
  outline: none;
  letter-spacing: 0.134065px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  transition: box-shadow 0.3s ease-in-out;
  font-family: var(--montserrat);

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    opacity: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: var(--light-gray);
    transition: opacity 0.3s ease-in-out;
  }

  &:disabled {
    color: rgba(25, 57, 50, 0.4);
  }

  @media only screen and (max-width: 48.1em) { //768px
    padding: 11px 15px;
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const FormControlShow: any = styled.button`
  position: absolute;
  right: 21px;
  top: 16px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  border: 0;
  width: 22px;
  height: 16px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjkxOTYgNy42QzE4Ljg5OTYgMi45MSAxNS4wOTk2IDAgMTAuOTk5NiAwQzYuODk5NTggMCAzLjA5OTU4IDIuOTEgMS4wNzk1OCA3LjZDMS4wMjQ1MiA3LjcyNjE3IDAuOTk2MDk0IDcuODYyMzQgMC45OTYwOTQgOEMwLjk5NjA5NCA4LjEzNzY2IDEuMDI0NTIgOC4yNzM4MyAxLjA3OTU4IDguNEMzLjA5OTU4IDEzLjA5IDYuODk5NTggMTYgMTAuOTk5NiAxNkMxNS4wOTk2IDE2IDE4Ljg5OTYgMTMuMDkgMjAuOTE5NiA4LjRDMjAuOTc0NiA4LjI3MzgzIDIxLjAwMzEgOC4xMzc2NiAyMS4wMDMxIDhDMjEuMDAzMSA3Ljg2MjM0IDIwLjk3NDYgNy43MjYxNyAyMC45MTk2IDcuNlY3LjZaTTEwLjk5OTYgMTRDNy44MTk1OCAxNCA0LjgyOTU4IDExLjcxIDMuMDk5NTggOEM0LjgyOTU4IDQuMjkgNy44MTk1OCAyIDEwLjk5OTYgMkMxNC4xNzk2IDIgMTcuMTY5NiA0LjI5IDE4Ljg5OTYgOEMxNy4xNjk2IDExLjcxIDE0LjE3OTYgMTQgMTAuOTk5NiAxNFpNMTAuOTk5NiA0QzEwLjIwODUgNCA5LjQzNTA5IDQuMjM0NiA4Ljc3NzMgNC42NzQxMkM4LjExOTUgNS4xMTM2NSA3LjYwNjgxIDUuNzM4MzYgNy4zMDQwNiA2LjQ2OTI3QzcuMDAxMzEgNy4yMDAxNyA2LjkyMjEgOC4wMDQ0NCA3LjA3NjQ0IDguNzgwMzZDNy4yMzA3OCA5LjU1NjI5IDcuNjExNzQgMTAuMjY5IDguMTcxMTUgMTAuODI4NEM4LjczMDU2IDExLjM4NzggOS40NDMyOSAxMS43Njg4IDEwLjIxOTIgMTEuOTIzMUMxMC45OTUxIDEyLjA3NzUgMTEuNzk5NCAxMS45OTgzIDEyLjUzMDMgMTEuNjk1NUMxMy4yNjEyIDExLjM5MjggMTMuODg1OSAxMC44ODAxIDE0LjMyNTUgMTAuMjIyM0MxNC43NjUgOS41NjQ0OCAxNC45OTk2IDguNzkxMTMgMTQuOTk5NiA4QzE0Ljk5OTYgNi45MzkxMyAxNC41NzgyIDUuOTIxNzIgMTMuODI4IDUuMTcxNTdDMTMuMDc3OSA0LjQyMTQzIDEyLjA2MDQgNCAxMC45OTk2IDRWNFpNMTAuOTk5NiAxMEMxMC42MDQgMTAgMTAuMjE3MyA5Ljg4MjcgOS44ODg0NCA5LjY2Mjk0QzkuNTU5NTQgOS40NDMxOCA5LjMwMzE5IDkuMTMwODIgOS4xNTE4MiA4Ljc2NTM3QzkuMDAwNDQgOC4zOTk5MSA4Ljk2MDg0IDcuOTk3NzggOS4wMzgwMSA3LjYwOTgyQzkuMTE1MTggNy4yMjE4NiA5LjMwNTY2IDYuODY1NDkgOS41ODUzNyA2LjU4NTc5QzkuODY1MDcgNi4zMDYwOCAxMC4yMjE0IDYuMTE1NiAxMC42MDk0IDYuMDM4NDNDMTAuOTk3NCA1Ljk2MTI2IDExLjM5OTUgNi4wMDA4NyAxMS43NjQ5IDYuMTUyMjRDMTIuMTMwNCA2LjMwMzYyIDEyLjQ0MjggNi41NTk5NiAxMi42NjI1IDYuODg4ODZDMTIuODgyMyA3LjIxNzc2IDEyLjk5OTYgNy42MDQ0NCAxMi45OTk2IDhDMTIuOTk5NiA4LjUzMDQzIDEyLjc4ODkgOS4wMzkxNCAxMi40MTM4IDkuNDE0MjFDMTIuMDM4NyA5Ljc4OTI5IDExLjUzIDEwIDEwLjk5OTYgMTBaIiBmaWxsPSIjOEE5MkFEIi8+Cjwvc3ZnPgo=);
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 48.1em) { //768px
    right: 12px;
  }
`;

export const FormControlInputError: any = styled.p`
  display: none;
  margin: 5px 15px 8px;
  color: var(--red);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  white-space: pre-line;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  
  &.-show {
    display: block;
  }
`;
