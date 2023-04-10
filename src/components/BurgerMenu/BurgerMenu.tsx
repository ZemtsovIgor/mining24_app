import React from "react";
import {PATHS} from "../../const/paths.constants";
import { MobileMenuComponent, MenuListLink } from './BurgerMenu.Styles';
import {Icon, LanguageSelector, Logo} from "../../elements";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import {logout} from "../../store/user/actions";
import {AppStateType} from "../../store";
import {setMobileMenuOpen} from "../../store/app/actions";

type BurgerMenuProps = {
  mobileMenuOpened: boolean;
  logout: () => void;
  setMobileMenuOpen: (value: boolean) => void;
};

const BurgerMenu: React.FC<BurgerMenuProps> = (props: BurgerMenuProps) => {
  const { mobileMenuOpened, logout, setMobileMenuOpen } = props;
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <MobileMenuComponent className={`off-canvas position-right is-transition-push ${mobileMenuOpened ? 'is-open' : 'is-closed'}`}>
      <div className="header">
        <Logo className="header-logo" to={PATHS.DASHBOARD}>
          <img src="/img/main/logo.svg" alt="mining24" />
        </Logo>
        <button
          className="header-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpened)}
        >
          <img src="/img/main/crest.svg" alt="mining24" />
        </button>
      </div>
      <div className="is-drilldown">
        <ul className="menu">
          <li className={pathname === PATHS.DASHBOARD ? 'nav-link -active' : 'nav-link'}>
            <MenuListLink
              onClick={() => setMobileMenuOpen(false)}
              to={PATHS.DASHBOARD}
              className='menu__link'
            >
              <Icon name="dashboard" size="20" />
              <span className="menu__text">{t('navBar.dashboard')}</span>
            </MenuListLink>
          </li>
          <li className={pathname === PATHS.CONTRACT ? 'nav-link -active' : 'nav-link'}>
            <MenuListLink
              onClick={() => setMobileMenuOpen(false)}
              to={PATHS.CONTRACT}
              className='menu__link'
            >
              <Icon name="contract" size="20" />
              <span className="menu__text">{t('navBar.contract')}</span>
            </MenuListLink>
          </li>
          <li className={pathname === PATHS.SHOP ? 'nav-link -active' : 'nav-link'}>
            <MenuListLink
              onClick={() => setMobileMenuOpen(false)}
              to={PATHS.SHOP}
              className='menu__link'
            >
              <Icon name="shop" size="20" />
              <span className="menu__text">{t('navBar.shop')}</span>
            </MenuListLink>
          </li>
          <div className="menu__line"/>
          <li className={pathname === PATHS.STATISTICS ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink
              onClick={() => setMobileMenuOpen(false)}
              to={PATHS.STATISTICS}
              className='menu__link'
            >
              <Icon name="statistics" size="20" />
              <span className="menu__text">{t('navBar.statistics')}</span>
            </MenuListLink>
          </li>
          <li className={pathname === PATHS.TRANSACTIONS ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink
              onClick={() => setMobileMenuOpen(false)}
              to={PATHS.TRANSACTIONS}
              className='menu__link'
            >
              <Icon name="transactions" size="20" />
              <span className="menu__text">{t('navBar.transactions')}</span>
            </MenuListLink>
          </li>
          <li className={pathname === PATHS.REFERRALS ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink
              onClick={() => setMobileMenuOpen(false)}
              to={PATHS.REFERRALS}
              className='menu__link'
            >
              <Icon name="referrals" size="20" />
              <span className="menu__text">{t('navBar.referrals')}</span>
            </MenuListLink>
          </li>
          <li className={pathname === PATHS.SETTINGS ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink
              onClick={() => setMobileMenuOpen(false)}
              to={PATHS.SETTINGS}
              className='menu__link'
            >
              <Icon name="settings" size="20" />
              <span className="menu__text">{t('navBar.settings')}</span>
            </MenuListLink>
          </li>
          <li className={pathname === PATHS.PROFILE ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink
              onClick={() => setMobileMenuOpen(false)}
              to={PATHS.PROFILE}
              className='menu__link'
            >
              <Icon name="profile" size="20" />
              <span className="menu__text">{t('navBar.profile')}</span>
            </MenuListLink>
          </li>
          <div className="menu__line"/>
          <li className="menu__item">
            <button onClick={() => logout()} className="menu__link">
              <Icon name="logout" size="20" />
              <span className="menu__text">{t('navBar.logout')}</span>
            </button>
          </li>
        </ul>

        <div className="bottom">
          <LanguageSelector />
          <div className="bottom-name__wrap">
            <span className="bottom-name">Aleksander V.</span>
          </div>
        </div>

      </div>
    </MobileMenuComponent>
  );
};

const mapState = (state: AppStateType) => {
  const { app } = state;
  return {
    mobileMenuOpened: app.mobileMenuOpened
  };
};

export default connect(mapState, { logout, setMobileMenuOpen })(BurgerMenu);
