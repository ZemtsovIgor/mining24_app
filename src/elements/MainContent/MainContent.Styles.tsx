import styled from 'styled-components';

export const MainContentBlock: any = styled.main`
  width: 100%;
  height: calc(100% - 104px);
  flex: 1 1 auto;
  font-family: var(--montserrat);

  &.content-main_bg-1 {
    background: url('/img/bg/bg_1.svg') bottom right / contain no-repeat;
  }

  &.content-main_bg-2 {
    background: url('/img/bg/bg_2.svg') right bottom / 65% no-repeat;
  }

  &.content-main_bg-3 {
    background: url('/img/bg/bg_3.svg') right bottom / 50% no-repeat;
  }
`;
