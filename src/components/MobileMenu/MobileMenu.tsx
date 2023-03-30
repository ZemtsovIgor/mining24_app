import React from 'react';
import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { MobileMenuWrapper } from './MobileMenu.styles';
import {useTranslation} from "react-i18next";

import { Icon } from '../../elements';
import { PATHS } from "../../const/paths.constants";


const MobileMenu: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <MobileMenuWrapper className='mobileMenu'>
      <div className="mobileMenu-wrap">
        <div className={pathname === PATHS.DASHBOARD ? 'mobileMenu-item -active' : 'mobileMenu-item'}>
          <Link to={PATHS.DASHBOARD} className='mobileMenu-link'>
            <Icon name="dashboard" size="20" />
            <span className="mobileMenu-text">{t('navBar.dashboard')}</span>
          </Link>
        </div>
        <div className={pathname === PATHS.CONTRACT ? 'mobileMenu-item -active' : 'mobileMenu-item'}>
          <Link to={PATHS.CONTRACT} className='mobileMenu-link'>
            <Icon name="contract" size="20" />
            <span className="mobileMenu-text">{t('navBar.contract')}</span>
          </Link>
        </div>
        <div className={pathname === PATHS.SHOP ? 'mobileMenu-item -active' : 'mobileMenu-item'}>
          <Link to={PATHS.SHOP} className='mobileMenu-link'>
            <Icon name="shop" size="20" />
            <span className="mobileMenu-text">{t('navBar.shop')}</span>
          </Link>
        </div>
        <div className={pathname === PATHS.STATISTICS ? 'mobileMenu-item -active' : 'mobileMenu-item'}>
          <Link to={PATHS.STATISTICS} className='mobileMenu-link'>
            <Icon name="more" size="20" />
            <span className="mobileMenu-text">{t('navBar.more')}</span>
          </Link>
        </div>
      </div>
    </MobileMenuWrapper>
  );
};

export default connect()(MobileMenu);
