import React from 'react';
import { Link } from 'react-router-dom';

import { NoContractsWrapper } from './NoContracts.styles';
import { useTranslation } from "react-i18next";
import { PATHS } from "../../const/paths.constants";

const NoContracts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NoContractsWrapper>
      <div className="contracts__wrap">
        <div className="grid-x grid-margin-x contracts__container">
          <div className="cell grid-x small-12 xlarge-5 contracts__cell">
            <div className="contracts__image_wrap">
              <img className="contracts__image" src="/img/main/stat.png" alt="mining24" />
            </div>
          </div>
          <div className="cell grid-x small-12 xlarge-7 contracts__cell">
            <div className="contracts__ref">
              <div className="contracts__title-wrap">
                <span className="contracts__title">{t('no_contracts.title')}</span>
              </div>
              <div className="contracts__text-wrap">
                <p className="contracts__text">{t('no_contracts.text')}</p>
              </div>
              <div className="contracts__btn-wrap">
                <Link
                  className="contracts__btn"
                  to={PATHS.CONTRACT}
                >
                  {t('no_contracts.btn')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NoContractsWrapper>
  );
};

export default NoContracts;
