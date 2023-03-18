import React from 'react';
import { connect } from 'react-redux';

import { HeaderWrapper } from './Header.styles';
import {useTranslation} from "react-i18next";

import { LanguageSelector } from '../../elements';


const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeaderWrapper className='header'>
      <div className="header-wrap">
        <div className="header-title__wrap">
          <span className="header-title">{t('navBar.dashboard')}</span>
        </div>

        <div className="header-lang__wrap">
          <LanguageSelector />
        </div>
        <div className="header-name__wrap">
          <span className="header-name">Aleksander V.</span>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default connect()(Header);
