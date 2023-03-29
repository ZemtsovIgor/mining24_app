import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactPhoneInput from 'react-phone-input-2';

import { FormControlInputError } from '../Input/Input.Styles';

import { PhoneInputStyles } from './PhoneInput.Styles';

type PhoneInputProps = {
  className?: string;
  error?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (val: string, isValid: boolean) => void;
};

function PhoneInput(props: PhoneInputProps) {
  const { className, value, onChange, error, placeholder, name, ...rest } = props;
  const { i18n, t } = useTranslation();
  const { language } = i18n;
  const [languageCountry, setLanguageCountry] = useState<string>(language);
  const [reInit, setReInit] = useState<boolean>(false);

  const handleChangePhone = useCallback(
    (val: string, data: any) => {
      if (val) {
        const validNumberCount: number = (data.format.match(/\./g) || []).length;
        const isValid: boolean = val.length === validNumberCount;

        onChange(val, isValid);
      }
    },
    [onChange, name]
  );

  useEffect(() => {
    if (languageCountry !== language) {
      onChange('', false);
      setReInit(true);
    }
  }, [language]);

  useEffect(() => {
    if (!!reInit) {
      setLanguageCountry(language);
      setReInit(false);
    }
  }, [reInit]);

  return (
    <PhoneInputStyles className={`${className} ${error ? '-error' : ''}`}>
      {!reInit ? (
        <ReactPhoneInput
          specialLabel=""
          country={languageCountry}
          placeholder={placeholder}
          value={value}
          onChange={handleChangePhone}
        />
      ) : null}
      <input type="hidden" {...rest} />
      <FormControlInputError>{t(`${error}`)}</FormControlInputError>
    </PhoneInputStyles>
  );
}

export default PhoneInput;
