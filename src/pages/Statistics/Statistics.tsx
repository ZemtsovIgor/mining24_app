import React from 'react';
import {
  Container,
  MainContent,
} from '../../elements';
import { StatisticsContainer } from "./Statistics.Styles";
import NoContracts from "../../components/NoContracts";
import Recommended from "../../components/Recommended";
import {useTranslation} from "react-i18next";
import LineChart from "../../elements/LineChart/LineChart";

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
  statistics: {
    params: {
      keys: ['hashrate', 'sum'],
      hashrate: {
        color: '#58E664'
      },
      sum: {
        color: '#824FF3'
      }
    },
    items: [
      {
        time: '2022-10-20',
        hashrate: 0.00001,
        sum: 0.00009,
      },
      {
        time: '2022-11-20',
        hashrate: 0.00004,
        sum: 0.00002,
        name: "hashrate",
      },
      {
        time: '2022-12-20',
        hashrate: 0.00002,
        sum: 0.00008,
        name: "hashrate",
      },
      {
        time: '2023-01-20',
        hashrate: 0.00007,
        sum: 0.00003,
        name: "hashrate",
      },
      {
        time: '2023-02-20',
        hashrate: 0.00004,
        sum: 0.00007,
        name: "hashrate",
      },
      {
        time: '2023-03-20',
        hashrate: 0.000010,
        sum: 0.00006,
        name: "hashrate",
      }
    ]
  }
};

const hasStat = true;

const Statistics: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainContent className="content-main home-page">
      <Container>
        <StatisticsContainer>
          <div className="home-title_wrap -big -hidden-large">
            <span className="home-title">Statistics</span>
          </div>
          {
            hasStat ? (
              <div className="chart-wrap">
                <div className="title-wrap">
                  <span className="title">Statistics</span>
                </div>

                <LineChart
                  data={data.statistics}
                />

                <div className="circle-wrap">
                  <div className="circle-item">
                    <span className="circle">Hashrate</span>
                  </div>

                  <div className="circle-item -purple">
                    <span className="circle">Sum</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <NoContracts />
                <div className="home-title_wrap">
                  <span className="home-title">Available for you</span>
                </div>
                <Recommended items={data.items} />
              </>
            )
          }
        </StatisticsContainer>
      </Container>
    </MainContent>
  );
};

export default Statistics;
