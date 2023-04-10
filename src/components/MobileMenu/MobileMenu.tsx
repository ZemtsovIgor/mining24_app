import React from 'react';
import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { AppStateType} from "../../store";

import { MobileMenuWrapper } from './MobileMenu.styles';
import {useTranslation} from "react-i18next";

import { Icon } from '../../elements';
import { PATHS } from "../../const/paths.constants";
import { setMobileMenuOpen } from "../../store/app/actions";

type MobileMenuProps = {
  mobileMenuOpened: boolean;
  setMobileMenuOpen: (value: boolean) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = (props: MobileMenuProps) => {
  const { mobileMenuOpened, setMobileMenuOpen } = props;
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
        <div
          className={`mobileMenu-item ${mobileMenuOpened ? '-opened' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpened)}
        >
          <div className='mobileMenu-link'>
            <div
              className="mobileMenu-burger"
            >
              <div className="x" />
              <div className="y" />
              <div className="z" />
            </div>
            <span className="mobileMenu-text">{t('navBar.more')}</span>
          </div>
        </div>
      </div>
    </MobileMenuWrapper>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const { app } = state;
  return {
    mobileMenuOpened: app.mobileMenuOpened,
  };
};

export default connect(mapStateToProps, { setMobileMenuOpen })(MobileMenu);
