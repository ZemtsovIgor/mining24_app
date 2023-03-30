import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { HeaderWrapper } from './Header.styles';
import {useTranslation} from "react-i18next";

import {LanguageSelector, Logo} from '../../elements';
import {PATHS} from "../../const/paths.constants";


const Header: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const array = pathname
    .split('/')
    .filter((val: string) => !!val)
    .map((route: string, i: number, arr: string[]) => {
      return {
        url: arr.filter((item: string, index: number) => index <= i).join('/'),
        route,
      };
    });

  return (
    <HeaderWrapper className='header'>
      <div className="header-wrap">
        <Logo className="header-logo" to={PATHS.DASHBOARD}>
          <img src="/img/main/logo.svg" alt="mining24" />
        </Logo>

        <div className="header-title__wrap">
          <span className="header-title">{t(`navBar.${array[array.length - 1].route}`)}</span>
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
