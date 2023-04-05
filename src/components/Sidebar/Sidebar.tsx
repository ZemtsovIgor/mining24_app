import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  Menu,
  MenuList,
  MenuListItem,
  MenuListLink,
  SidebarWrapper,
} from './Sidebar.Styles';
import {PATHS} from "../../const/paths.constants";
import { Icon, Logo } from '../../elements';
import { logout } from '../../store/user/actions';


type SidebarProps = {
  logout: () => void;
};

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { logout } = props;
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <SidebarWrapper>
      <Logo className="logo" to={PATHS.DASHBOARD}>
        <img src="/img/main/logo.svg" alt="mining24" />
      </Logo>

      <Menu className="menu">
        <MenuList className="menu__list">
          <MenuListItem className={pathname === PATHS.DASHBOARD ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink to={PATHS.DASHBOARD} className='menu__link'>
              <Icon name="dashboard" size="20" />
              <span className="menu__text">{t('navBar.dashboard')}</span>
            </MenuListLink>
          </MenuListItem>
          <MenuListItem className={pathname === PATHS.CONTRACT ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink to={PATHS.CONTRACT} className='menu__link'>
              <Icon name="contract" size="20" />
              <span className="menu__text">{t('navBar.contract')}</span>
            </MenuListLink>
          </MenuListItem>
          <MenuListItem className={pathname === PATHS.SHOP ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink to={PATHS.SHOP} className='menu__link'>
              <Icon name="shop" size="20" />
              <span className="menu__text">{t('navBar.shop')}</span>
            </MenuListLink>
          </MenuListItem>
          <div className="menu__line"/>
          <MenuListItem className={pathname === PATHS.STATISTICS ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink to={PATHS.STATISTICS} className='menu__link'>
              <Icon name="statistics" size="20" />
              <span className="menu__text">{t('navBar.statistics')}</span>
            </MenuListLink>
          </MenuListItem>
          <MenuListItem className={pathname === PATHS.TRANSACTIONS ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink to={PATHS.TRANSACTIONS} className='menu__link'>
              <Icon name="transactions" size="20" />
              <span className="menu__text">{t('navBar.transactions')}</span>
            </MenuListLink>
          </MenuListItem>
          <MenuListItem className={pathname === PATHS.REFERRALS ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink to={PATHS.REFERRALS} className='menu__link'>
              <Icon name="referrals" size="20" />
              <span className="menu__text">{t('navBar.referrals')}</span>
            </MenuListLink>
          </MenuListItem>
          <MenuListItem className={pathname === PATHS.SETTINGS ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink to={PATHS.SETTINGS} className='menu__link'>
              <Icon name="settings" size="20" />
              <span className="menu__text">{t('navBar.settings')}</span>
            </MenuListLink>
          </MenuListItem>
          <MenuListItem className={pathname === PATHS.PROFILE ? 'menu__item -active' : 'menu__item'}>
            <MenuListLink to={PATHS.PROFILE} className='menu__link'>
              <Icon name="profile" size="20" />
              <span className="menu__text">{t('navBar.profile')}</span>
            </MenuListLink>
          </MenuListItem>

          <MenuListItem className="menu__item">
            <button onClick={() => logout()} className="menu__link">
              <Icon name="logout" size="20" />
              <span className="menu__text">{t('navBar.logout')}</span>
            </button>
          </MenuListItem>
        </MenuList>
      </Menu>
    </SidebarWrapper>
  );
};

export default connect(null, { logout })(Sidebar);
