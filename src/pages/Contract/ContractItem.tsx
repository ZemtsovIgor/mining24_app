import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  MainContent,
  Modal,
} from '../../elements';
import { ContractItemContainer } from "./Contract.Styles";
import LineChart from "../../elements/LineChart/LineChart";

const data:any = {
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
};

const ContractItem: React.FC = () => {
  const [modalCanselContractOpened, setModalCanselContractOpened] = useState<boolean>(false);

  return (
    <MainContent className="content-main home-page">
      <Container>
        <ContractItemContainer>
          <div className="title-wrap">
            <span className="title">Statistics</span>
          </div>
          <div className="chart-wrap">
            <LineChart
              data={data.statistics}
            />
          </div>

          <div className="bns-wrap">
            <Button
              className='btn'
              onClick={() => setModalCanselContractOpened(true)}
            >
              Cancel contract
            </Button>
          </div>
        </ContractItemContainer>

        <Modal
          opened={modalCanselContractOpened}
          closeModal={() => setModalCanselContractOpened(false)}
          className="modal"
        >
          <div className="modal-content">
            <h4 className="modal-title">Cancel contract?</h4>
            <div className="modal-btn__wrap">
              <Button
                className="modal-btn"
                type="button"
                onClick={() => setModalCanselContractOpened(false)}
              >
                Yes
              </Button>
              <Button
                className="modal-btn -gray"
                type="button"
                onClick={() => setModalCanselContractOpened(false)}
              >
                No
              </Button>
            </div>
          </div>
        </Modal>

      </Container>
    </MainContent>
  );
};

export default connect()(ContractItem);