import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  MainContent,
} from '../../elements';
import Contracts from '../../components/Contracts';
import {ContractContainer} from "./Contract.Styles";

const data:any = {
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

const Contract: React.FC = () => {

  return (
    <MainContent className="content-main home-page">
      <Container>
        <ContractContainer>
          <div className="home-title_wrap -big">
            <span className="home-title">Contract</span>
          </div>
          <Contracts items={data.contracts.items} />
        </ContractContainer>
      </Container>
    </MainContent>
  );
};

export default connect()(Contract);
