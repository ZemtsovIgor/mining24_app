import React from 'react';
import {
  Container,
  MainContent,
} from '../../elements';
import { SettingsContainer } from "./Settings.Styles";
import { useTranslation } from "react-i18next";

const Settings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainContent className="content-main home-page">
      <Container>
        <SettingsContainer>
          <div className="home-title_wrap">
            <span className="home-title">Account</span>
          </div>
          <div className="home-subtitle_wrap">
            <span className="home-subtitle">Change password</span>
          </div>
        </SettingsContainer>
      </Container>
    </MainContent>
  );
};

export default Settings;
