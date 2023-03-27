import React, {useState} from 'react';
import {
  Container, Icon,
  MainContent, Modal, ReferralInput, SocialNetworks,
} from '../../elements';
import { ReferralsContainer } from "./Referrals.Styles";
import ReferralsTable from "../../components/Referrals";
import { useTranslation } from "react-i18next";

const data:any = {
  items: [
    {
      email: 'a****@***.com ',
      date: '31/12/2022',
      sum: '1 929 485 BTC',
    },
    {
      email: 'a****@***.com ',
      date: '31/12/2022',
      sum: '834 839 USDC',
    },
    {
      email: 'a****@***.com ',
      date: '31/12/2022',
      sum: '93 302 ETH',
    }
  ]
};

const hasData = true;

const Referrals: React.FC = () => {
  const { t } = useTranslation();
  const [modalReferralOpened, setModalReferralOpened] = useState<boolean>(false);

  return (
    <MainContent className="content-main home-page">
      <Container>
        <ReferralsContainer>
          {
            hasData ? (
              <>
                <ReferralsTable
                  items={data.items}
                />
                <div className="wallet-share">
                  <div className="wallet-share__wrap">
                    <div className="grid-x grid-margin-x wallet-share__container">
                      <div className="cell grid-x small-5 xlarge-5 wallet-share__cell">
                        <div className="wallet-share__image_wrap">
                          <img className="wallet-share__image" src="/img/main/share.svg" alt="mining24" />
                        </div>
                      </div>
                      <div className="cell grid-x small-7 xlarge-7 wallet-share__cell">
                        <div className="wallet-share__ref">
                          <div className="wallet-share__title_wrap">
                            <span className="wallet-share__title">Refer more friends to earn more profit </span>
                          </div>
                          <div className="wallet-share__input_wrap">
                            <ReferralInput
                              className="wallet-share__input"
                              id="ref_link"
                              name="ref_link"
                              type="text"
                              value={`site_url/registration?ref=123`}
                              onClick={() => setModalReferralOpened(true)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="wallet-share -big">
                <div className="wallet-share__wrap">
                  <div className="grid-x grid-margin-x wallet-share__container">
                    <div className="cell grid-x small-5 xlarge-5 wallet-share__cell">
                      <div className="wallet-share__image_wrap">
                        <img className="wallet-share__image" src="/img/main/share.svg" alt="mining24" />
                      </div>
                    </div>
                    <div className="cell grid-x small-7 xlarge-7 wallet-share__cell">
                      <div className="wallet-share__ref">
                        <div className="wallet-share__title_wrap">
                          <span className="wallet-share__title">You don't have any referrals yet</span>
                        </div>
                        <div className="wallet-share__rewards_wrap">
                          <span className="wallet-share__rewards">Refer a friend to earn a percentage</span>
                        </div>
                        <div className="wallet-share__input_wrap">
                          <ReferralInput
                            className="wallet-share__input"
                            id="ref_link"
                            name="ref_link"
                            type="text"
                            value={`site_url/registration?ref=123`}
                            onClick={() => setModalReferralOpened(true)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </ReferralsContainer>

        <Modal
          opened={modalReferralOpened}
          closeModal={() => setModalReferralOpened(false)}
          className="modal"
          hasCloseBtn={true}
        >
          <div className="modal-content">
            <h4 className="modal-title">{t('modal.referral.title')}</h4>
            <p className="modal-text">{t('modal.referral.description')}</p>
            <div className="modal-social__wrap">
              <SocialNetworks />
            </div>
          </div>
        </Modal>
      </Container>
    </MainContent>
  );
};

export default Referrals;
