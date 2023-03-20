import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container, Icon,
  MainContent,
  ReferralInput,
} from '../../elements';
import { useTranslation } from "react-i18next";
import {HomeContainer} from "./Home.Styles";
import Contracts from '../../components/Contracts';

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

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainContent className="content-main home-page">
      <Container>
        <HomeContainer>
          <div className="grid-x grid-margin-x wallet">
            <div className="cell grid-x small-12 xlarge-45 wallet-refill">
              <div className="wallet-refill__wrap">
                <div className="wallet-refill__balance_wrap">
                  <span className="wallet-refill__balance">0.00275611 BTC</span>
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
            <div className="cell grid-x small-12 xlarge-75 wallet-share">
              <div className="wallet-share__wrap">
                <div className="grid-x grid-margin-x wallet-share__container">
                  <div className="cell grid-x small-5 xlarge-45 wallet-share__cell">
                    <div className="wallet-share__image_wrap">
                      <img className="wallet-share__image" src="/img/main/share.svg" alt="mining24" />
                    </div>
                  </div>
                  <div className="cell grid-x small-7 xlarge-75 wallet-share__cell">
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
          <div className="home-title_wrap">
            <span className="home-title">Available for you</span>
          </div>
          <div className="available">
            <div className="grid-x grid-margin-x available-container">
              {
                data.items.map((item:any, index: number) => (
                  <div
                    key={`available-${index + 1}`}
                    className={`cell grid-x small-4 xlarge-4 available-card -${item.color} -${item.type}`}
                  >
                    <div className="cell available-card__content">
                      <span className="available-card__title">{item.title}</span>
                      {
                        (!!item.list.length) && (
                          <ul className="available-card__list">
                            {
                              item.list.map((listItem: string, listIndex: number) => (
                                <li className="available-card__list_item" key={`available-list-${listIndex + 1}`}>{listItem}</li>
                              ))
                            }
                          </ul>
                        )
                      }
                      <span className="available-card__price">{item.price}</span>

                      <div className="available-card__btn_wrap">
                        <Button
                          className='available-card__btn'
                        >
                          Buy contract
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </HomeContainer>
      </Container>
    </MainContent>
  );
};

export default connect()(Home);
