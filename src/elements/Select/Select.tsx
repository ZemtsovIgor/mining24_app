import { ExpandMore } from '@mui/icons-material';
import React from 'react';

import {
  SelectContainer,
  SelectListItem,
} from './Select.Styles';

interface Props {
  className?: string;
  name: string;
  placeholder?: string;
  value?: string;
  fullWidth?: boolean;
  list: any[];
  onChange: (name: string, value: string) => void;
  IconComponent?: any;
  disableRotate?: boolean;
}

export const Select: React.FC<Props> = (props: Props) => {
  const {
    className,
    name,
    placeholder,
    value,
    fullWidth,
    list,
    onChange,
    IconComponent,
    disableRotate,
  } = props;

  const menuProps = {
    disablePortal: true,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    }
  };

  return (
    <SelectContainer
      MenuProps={menuProps}
      id={name}
      className={`${className}, ${disableRotate ? '-disable-rotate' : ''}`}
      name={name}
      placeholder={placeholder}
      value={value}
      fullWidth={fullWidth}
      aria-describedby={`${name}-text`}
      IconComponent={IconComponent || ExpandMore}
      onChange={(e: React.ChangeEvent<any>) => onChange(name, e.target.value)}
    >
      {list.map((item: any) => (
        <SelectListItem
          key={`drop-down-item-${item.value}`}
          value={item.value}
        >
          {item.text}
        </SelectListItem>
      ))}
    </SelectContainer>
  );
};
