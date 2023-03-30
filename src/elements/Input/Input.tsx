import React, { createRef } from 'react';
import { useTranslation } from 'react-i18next';

import { cleanStringWithNumberVal } from '../../common/utils/formatters';
import {
  FormControl,
  FormControlInput,
  FormControlInputError, FormControlInputWrap, FormControlShow,
} from './Input.Styles';

type InputType = 'email' | 'password' | 'number' | 'text' | 'date' | 'phone';

interface Props {
  id?: string;
  className?: string;
  type: InputType;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  error?: string;
  onChange?: (field: string, value: string) => void;
  onBlur?: (field: string) => void;
  maxLength?: number;
  show?: boolean;
  onShow?: (field: string) => void;
}

export const Input: React.FC<Props> = (props: Props) => {
  const {
    id,
    className,
    name,
    type,
    value,
    error,
    placeholder,
    disabled,
    onChange,
    onBlur,
    maxLength,
    show,
    onShow,
  } = props;

  const { t } = useTranslation();

  const inputRef = createRef();

  const onInputChange = (value: string) => {
    if (!onChange) return false;
    if (type === 'number') {
      return onChange(name, cleanStringWithNumberVal(value));
    }
    return onChange(name, value);
  };

  const onInputBlur = () => {
    if (!onBlur) return;

    onBlur(name);
  };

  const onToggleShow = () => {
    if (!onShow) return;

    onShow(name);
  };

  return (
    <FormControl className={`${className} ${error ? '-error' : ''}`}>
      <FormControlInputWrap>
        <FormControlInput
          ref={inputRef}
          id={id}
          type={type === 'password' ? show ? 'text' : type : type}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          disabled={disabled}
          onChange={(e: React.ChangeEvent<any>) => onInputChange(e.target.value)}
          onBlur={onInputBlur}
          maxLength={maxLength || 100}
        />
        <span className="placeholder">{placeholder}</span>
        {
          onShow ? (
            <FormControlShow type="button" onClick={onToggleShow}/>
          ) : null
        }
      </FormControlInputWrap>

      <FormControlInputError className={`${error ? '-show' : ''}`}>{t(`${error}`)}</FormControlInputError>
    </FormControl>
  );
};

export default Input;
