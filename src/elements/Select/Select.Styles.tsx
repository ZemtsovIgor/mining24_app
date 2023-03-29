import { Select, MenuItem } from '@mui/material';
import styled from 'styled-components';

export const SelectContainer: any = styled(Select)`
  margin: 0 0 16px;
  
  &.MuiInputBase-root {
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
    font-family: var(--montserrat);
    
    .MuiOutlinedInput-notchedOutline {
      display: none;
    }
    
    .MuiSelect-select {
      padding: 0;
    }
  }

  .MuiSelect-icon {
    right: 10px;
    color: var(--light-gray);
  }

  .MuiSelect-selectMenu {
    padding: 12px 40px 12px 30px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #eaeaea;
    background: #eaeaea;
    box-shadow: #eaeaea;
    border-radius: var(--border-radius);
  }

  .MuiMenu-paper {
    border-radius: var(--border-radius);
    box-shadow: none;
    background: #eaeaea;
  }

  .MuiMenu-list {
    padding: 20px;
  }

  .MuiListItem-button {
    border-radius: 8px;
    padding: 10px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.06) 71.01%,
        rgba(255, 255, 255, 0) 99.52%
      );
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    &:hover,
    &:focus {
      background-color: transparent;
      background-image: linear-gradient(
        90deg,
        rgba(232, 232, 232, 0.12) 0%,
        rgba(196, 196, 196, 0) 78.12%
      );
    }

    &.Mui-selected {
      background-color: transparent;
    }
  }

  .MuiListItem-root.Mui-selected,
  .MuiListItem-root.Mui-selected:hover {
    background-color: transparent;
  }

  &.dropdown-menu {
    background-color: transparent;
    border-radius: 5px;
    width: auto;
    margin-bottom: 0;

    .MuiSelect-select {
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: var(--white);
      background-color: transparent;
    }

    .MuiSelect-selectMenu {
      height: auto;
      border-radius: 0;
    }

    .MuiMenu-paper {
      border-radius: var(--border-radius);
      box-shadow: 0 0 11px rgba(0, 0, 0, 0.04);
    }

    .MuiList-root {
      background: linear-gradient(
        to top,
        rgba(147, 90, 237, 0.21) 0.14%,
        rgba(41, 47, 57, 0) 99.86%
      );
      border-radius: 13px;
    }

    .MuiList-padding {
      padding: 11px 8px;
    }

    .MuiListItem-button {
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: var(--white);
      border-radius: 8px;

      a {
        color: var(--white);
      }

      &::after {
        display: none;
      }

      &:focus,
      &:hover {
        background-color: transparent;
        text-decoration: underline;
      }

      &.Mui-selected {
        background-color: transparent;
        text-decoration: underline;
      }
    }

    .MuiMenuItem-root {
      min-height: auto;
    }

    &.-disable-rotate {
      &.Mui-focused {
        box-shadow: none;
      }
      & .MuiSelect-iconOpen {
        transform: none;
      }
    }
  }

  &.social-dropdown {
    .MuiSelect-selectMenu {
      padding: 0;
    }

    .MuiSelect-icon {
      top: auto;
      right: auto;
    }
  }
`;

export const SelectListItem: any = styled(MenuItem)``;
