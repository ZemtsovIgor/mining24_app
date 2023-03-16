import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AlertStyles } from './Alert.Styles';
import { ALERT_CLASSES } from '../../const/app.constants';

interface Props {
  alert: any;
  setAlert: (message: string | null, messageType: string | null) => void;
  pathname: string;
}

export const Alert: React.FC<Props> = (props: Props) => {
  const { alert, setAlert, pathname } = props;

  const [timer, setTimer] = useState<number>(0);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [urlPath, setUrlPath] = useState<string>('');
  const { t } = useTranslation();

  useEffect(() => {
    const s = timer - 1;

    if (s < 1) {
      setTimer(0);
      if (timerStarted) {
        setTimerStarted(false);
        setAlert(null, null);
      }
      return () => {};
    }

    const intervalId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setTimer(s);
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [timer, timerStarted]);

  useEffect(() => {
    if (alert.message) {
      setTimer(3);
      setTimerStarted(true);
    }
  }, [alert]);

  useEffect(() => {
    if (urlPath && urlPath !== pathname) {
      setAlert(null, null);
    }

    if (!urlPath) {
      setUrlPath(pathname);
    }
  }, [pathname, timerStarted, urlPath]);

  return (
    <AlertStyles className={`${alert.message ? 'show' : ''}`}>
      <p>{t(alert.message)}</p>
    </AlertStyles>
  );
};
