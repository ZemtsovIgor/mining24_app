import { MenuItem, Input } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {LANGUAGES, LANGUAGES_SWITCHER} from '../../common/utils/i18n';

import { LanguageSelectorStyles } from './LanguageSelector.Styles';

const LANGUAGE_LIST = Array.from(LANGUAGES.entries());
const LANGUAGE_CODES_LIST = LANGUAGE_LIST.map(l => l[0]);

interface Props {
  className?: string;
}

const LanguageSelector: React.FC<Props> = (props: Props) => {
  const { className } = props;
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const languageCode = typeof event.target.value === 'string' && event.target.value;
      if (!languageCode || LANGUAGE_CODES_LIST.indexOf(languageCode) < 0) return;
      i18n.changeLanguage(languageCode);
    },
    [i18n]
  );

  const menuProps = {
    disablePortal: true,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  return (
    <LanguageSelectorStyles
      className={`${className} langSwitcher-lang`}
      name="age"
      IconComponent={ExpandMore}
      MenuProps={menuProps}
      value={i18n.language}
      renderValue={(language: string) => <><i className={`langSwitcher-lang__flag -${language}`} /><span className="langSwitcher-lang__value">{LANGUAGES_SWITCHER[language]}</span></>}
      onChange={changeLanguage}
      input={<Input disableUnderline />}
    >
      {LANGUAGE_LIST.map(l => (
        <MenuItem value={l[0]} key={l[0]}>
          <i className={`langSwitcher-tooltip__flag -${l[0]}`} />
          <span className="langSwitcher-tooltip__name">{l[1]}</span>
          <div className={`langSwitcher-tooltip__check ${i18n.language === l[0] ? '-checked' : ''}`} />
        </MenuItem>
      ))}
    </LanguageSelectorStyles>
  );
};

export default LanguageSelector;
