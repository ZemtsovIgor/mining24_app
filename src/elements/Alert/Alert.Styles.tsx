import styled from 'styled-components';

export const AlertStyles: any = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 1rem 2rem;
  background-color: white;
  color: var(--white);
  border-radius: 18px;
  z-index: 999;
  transform: translateY(100%);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  &.alert-danger {
    background-color: var(--red);
  }

  &.alert-success {
    background-color: var(--green);
  }
`;

export const AlertClose: any = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  padding: 0.25rem;
  font-size: 1rem;
  color: var(--white);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
