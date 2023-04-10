import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  MainContent,
} from '../../elements';
import Contracts from '../../components/Contracts';
import {ContractContainer} from "./Contract.Styles";
import Recommended from "../../components/Recommended";
import {Link} from "react-router-dom";
import {PATHS} from "../../const/paths.constants";
import {useTranslation} from "react-i18next";

const data:any = {
  items: [
    {
      type: 'simple',
      color: 'purple',
      title: 'Simple',
      list: [
        '3.6 Th Power',
        '24 mo',
        '50% Estimated ROI'
      ],
      price: '$100'
    },
    {
      type: 'medium',
      color: 'green',
      title: 'Medium',
      list: [
        '18 Th Power',
        '24 mo',
        '75% Estimated ROI'
      ],
      price: '$500'
    },
    {
      type: 'expert',
      color: 'blue',
      title: 'Expert',
      list: [
        '110 Th Power',
        '24 mo',
        '200% Estimated ROI'
      ],
      price: '$5000'
    },
    {
      type: 'expert',
      color: 'blue',
      title: 'Expert',
      list: [
        '110 Th Power',
        '24 mo',
        '200% Estimated ROI'
      ],
      price: '$5000'
    },
    {
      type: 'expert',
      color: 'blue',
      title: 'Expert',
      list: [
        '110 Th Power',
        '24 mo',
        '200% Estimated ROI'
      ],
      price: '$5000'
    },
    {
      type: 'expert',
      color: 'blue',
      title: 'Expert',
      list: [
        '110 Th Power',
        '24 mo',
        '200% Estimated ROI'
      ],
      price: '$5000'
    }
  ],
  contracts: {
    items: [
      {
        name: 'Simple',
        hashrate: '19',
        until: '31/12/2022',
        earned: '8 583 399',
        statistics: [
          {
            time: 1674231959,
            value: 0.00001,
          },
          {
            time: 1674241959,
            value: 0.00004,
          },
          {
            time: 1674251959,
            value: 0.00002,
          },
          {
            time: 1674261959,
            value: 0.00007,
          },
          {
            time: 1674271959,
            value: 0.00004,
          },
          {
            time: 1674281959,
            value: 0.000010,
          }
        ]
      },
      {
        name: 'Medium',
        hashrate: '19',
        until: '31/12/2022',
        earned: '8 583 399',
        statistics: [
          {
            time: 1674231959,
            value: 0.00001,
          },
          {
            time: 1674241959,
            value: 0.00004,
          },
          {
            time: 1674251959,
            value: 0.00002,
          },
          {
            time: 1674261959,
            value: 0.00007,
          },
          {
            time: 1674271959,
            value: 0.00004,
          },
          {
            time: 1674281959,
            value: 0.000010,
          }
        ]
      },
      {
        name: 'Profi',
        hashrate: '19',
        until: '31/12/2022',
        earned: '8 583 399',
        statistics: [
          {
            time: 1674231959,
            value: 0.00001,
          },
          {
            time: 1674241959,
            value: 0.00004,
          },
          {
            time: 1674251959,
            value: 0.00002,
          },
          {
            time: 1674261959,
            value: 0.00007,
          },
          {
            time: 1674271959,
            value: 0.00004,
          },
          {
            time: 1674281959,
            value: 0.000010,
          }
        ]
      }
    ]
  }
};

const hasContract = true;

const Contract: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainContent className="content-main home-page">
      <Container>
        <ContractContainer>
          <div className="home-title_wrap -big -hidden-large">
            <span className="home-title">Contract</span>
          </div>
          {
            hasContract ? (
              <Contracts items={data.contracts.items} />
            ) : (
              <>
                <div className="contracts__wrap">
                  <div className="contracts__title-wrap">
                    <span className="contracts__title">{t('no_contracts.title')}</span>
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
                <div className="home-title_wrap">
                  <span className="home-title">Available for you</span>
                </div>
                <Recommended items={data.items} />
              </>
            )
          }
        </ContractContainer>
      </Container>
    </MainContent>
  );
};

export default connect()(Contract);
