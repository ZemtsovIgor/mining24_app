import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container, Icon,
  MainContent,
  ReferralInput,
  SocialNetworks,
} from '../../elements';
import { useTranslation } from "react-i18next";
import {HomeContainer} from "./Home.Styles";
import Contracts from '../../components/Contracts';
import Recommended from "../../components/Recommended";
import { openModal, closeModal } from '../../store/app/actions';

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
        until: '10/10/2022',
        earned: '9 473 BTC',
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
        until: '10/10/2022',
        earned: '389 473 USDC',
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
        until: '10/10/2022',
        earned: '1 392 393 ETH',
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

type HomeProps = {
  openModal: (payload: any) => void;
  closeModal: () => void;
};

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { openModal, closeModal } = props;
  const { t } = useTranslation();

  const modalReferral = () => (
    <div className="modal-content">
      <h4 className="modal-title">{t('modal.referral.title')}</h4>
      <p className="modal-text">{t('modal.referral.description')}</p>
      <div className="modal-social__wrap">
        <SocialNetworks />
      </div>
    </div>
  );

  return (
    <MainContent className="content-main home-page">
      <Container>
        <HomeContainer>
          <div className="home-title_wrap -big -hidden-large">
            <span className="home-title">Dashboard</span>
          </div>
          <div className="grid-x grid-margin-x wallet">
            <div className="cell grid-x small-12 xlarge-4 wallet-refill">
              <div className="wallet-refill__wrap">
                <div className="wallet-refill__balance_wrap">
                  <Icon className="wallet-refill__balance_icon" name="btc" size="24" />
                  <span className="wallet-refill__balance">471 839 BTC</span>
                </div>
                <div className="wallet-refill__btns">
                  <Button
                    className='wallet-refill__btn -green'
                  >
                    <Icon className="wallet-refill__btn_icon" name="bitcoin" size="24" />
                    {t('wallet.btns.refill')}
                  </Button>
                  <Button
                    className='wallet-refill__btn'
                  >
                    {t('wallet.btns.withdraw')}
                  </Button>
                </div>
              </div>
            </div>
            <div className="cell grid-x small-12 xlarge-8 wallet-share">
              <div className="wallet-share__wrap">
                <div className="grid-x grid-margin-x wallet-share__container">
                  <div className="cell grid-x small-12 xlarge-4 wallet-share__cell">
                    <div className="wallet-share__image_wrap">
                      <img className="wallet-share__image" src="/img/main/share.svg" alt="mining24" />
                    </div>
                  </div>
                  <div className="cell grid-x small-12 xlarge-8 wallet-share__cell">
                    <div className="wallet-share__ref">
                      <div className="wallet-share__title_wrap">
                        <span className="wallet-share__title">{t('share.texts.share')}</span>
                      </div>
                      <div className="wallet-share__rewards_wrap">
                        <span className="wallet-share__rewards">{t('share.texts.meeting')}</span>
                        <Icon className="wallet-share__icon" name="arrow" size="21" />
                        <span className="wallet-share__rewards">{t('share.texts.reward')}</span>
                      </div>
                      <div className="wallet-share__input_wrap">
                        <ReferralInput
                          className="wallet-share__input"
                          id="ref_link"
                          name="ref_link"
                          type="text"
                          value={`site_url/registration?ref=123`}
                          onClick={() => openModal({
                            closeModal: closeModal,
                            className: "modal wallet-modal",
                            hasCloseBtn: true,
                            content: modalReferral
                          })
                         }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-title_wrap">
            <span className="home-title">Bought contracts</span>
          </div>
          <Contracts items={data.contracts.items} />
          <div className="home-title_wrap -second">
            <span className="home-title">Available for you</span>
          </div>
          <div className="available">
            <Recommended items={data.items} />
          </div>
        </HomeContainer>
      </Container>
    </MainContent>
  );
};

export default connect(null, { openModal, closeModal })(Home);
