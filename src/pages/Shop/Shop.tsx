import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {
  Button,
  Container, Icon,
  MainContent, Modal,
} from '../../elements';
import { useTranslation } from "react-i18next";
import { ShopContainer } from "./Shop.Styles";
import {PATHS} from "../../const/paths.constants";

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
  ]
};

const Shop: React.FC = () => {
  const { t } = useTranslation();
  const [modalNeedVerifyOpened, setModalNeedVerifyOpened] = useState<boolean>(false);
  const [modalPaidOpened, setModalPaidOpened] = useState<boolean>(false);

  return (
    <MainContent className="content-main home-page">
      <Container>
        <ShopContainer>
          <div className="available">
            <div className="grid-x grid-margin-x available-container">
              {
                data.items.map((item:any, index: number) => (
                  <div
                    key={`available-${index + 1}`}
                    className={`cell grid-x small-4 xlarge-4 available-card -${item.color} -${item.type}`}
                    onClick={() => setModalNeedVerifyOpened(true)}
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
        </ShopContainer>

        <Modal
          opened={modalNeedVerifyOpened}
          closeModal={() => setModalNeedVerifyOpened(false)}
          className="modal"
          hasCloseBtn={true}
        >
          <div className="modal-content">
            <h4 className="modal-title">{t('modal.needVerify.title')}</h4>
            <p className="modal-text">{t('modal.needVerify.description')}</p>
            <div className="modal-btn__wrap">
              <Link
                className="modal-btn"
                to={PATHS.PROFILE}
              >
                {t('modal.needVerify.btn')}
              </Link>
            </div>
          </div>
        </Modal>

        <Modal
          opened={modalPaidOpened}
          closeModal={() => setModalPaidOpened(false)}
          className="modal"
          hasCloseBtn={true}
        >
          <div className="modal-content">
            <Icon className="modal-icon" name="check" size="52" />
            <h4 className="modal-title">{t('modal.paid.title')}</h4>
            <p className="modal-text">{t('modal.paid.description')}</p>
          </div>
        </Modal>

      </Container>
    </MainContent>
  );
};

export default connect()(Shop);
