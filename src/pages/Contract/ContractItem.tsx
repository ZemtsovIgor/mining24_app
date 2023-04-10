import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  MainContent,
} from '../../elements';
import { ContractItemContainer } from "./Contract.Styles";
import LineChart from "../../elements/LineChart/LineChart";
import {useTranslation} from "react-i18next";
import {closeModal, openModal} from "../../store/app/actions";

const data:any = {
  name: 'Simple',
  hashrate: '19',
  until: '31/12/2022',
  earned: '8 583 399',
  statistics: {
    params: {
      keys: ['hashrate'],
      hashrate: {
        color: '#58E664'
      }
    },
    items: [
      {
        time: '2022-10-20',
        hashrate: 0.00001,
      },
      {
        time: '2022-11-20',
        hashrate: 0.00004,
      },
      {
        time: '2022-12-20',
        hashrate: 0.00002,
      },
      {
        time: '2023-01-20',
        hashrate: 0.00007,
      },
      {
        time: '2023-02-20',
        hashrate: 0.00004,
      },
      {
        time: '2023-03-20',
        hashrate: 0.000010,
      }
    ]
  }
};

type ContractProps = {
  openModal: (payload: any) => void;
  closeModal: () => void;
};


const ContractItem: React.FC<ContractProps> = (props: ContractProps) => {
  const { openModal, closeModal } = props;
  const { t } = useTranslation();

  const modalCansel = () => (
    <div className="modal-content">
      <h4 className="modal-title">{t('modal.canselContract.title')}</h4>
      <div className="modal-btn__wrap">
        <Button
          className="modal-btn"
          type="button"
          onClick={() => closeModal()}
        >
          Yes
        </Button>
        <Button
          className="modal-btn -gray"
          type="button"
          onClick={() => closeModal()}
        >
          No
        </Button>
      </div>
    </div>
  );

  return (
    <MainContent className="content-main home-page">
      <Container>
        <ContractItemContainer>

          <div className="chart-wrap">
            <div className="title-wrap">
              <span className="title">Statistics</span>
            </div>

            <LineChart
              data={data.statistics}
            />
          </div>

          <div className="bns-wrap">
            <Button
              className='btn'
              onClick={() => openModal({
                closeModal: closeModal,
                className: "modal canselContract",
                hasCloseBtn: true,
                content: modalCansel
              })
              }
            >
              Cancel contract
            </Button>
          </div>
        </ContractItemContainer>
      </Container>
    </MainContent>
  );
};

export default connect(null, { openModal, closeModal })(ContractItem);
