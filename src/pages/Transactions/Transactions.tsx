import React, {useState} from 'react';
import {
  Button,
  Container, Loader,
  MainContent,
} from '../../elements';
import { TransactionsContainer } from "./Transactions.Styles";
import NoContracts from "../../components/NoContracts";
import Recommended from "../../components/Recommended";
import TransactionsTable from "../../components/Transactions";
import { useTranslation } from "react-i18next";

const data:any = {
  items: [
    {
      date: '10/10/2022',
      sum: '1 929 485 BTC',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol...',
    },
    {
      date: '10/10/2022',
      sum: '834 839 USDC',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol...',
    },
    {
      date: '10/10/2022',
      sum: '93 302 ETH',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol...',
    }
  ],
  recommended: [
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

const hasStat = true;

const Transactions: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <MainContent className="content-main home-page">
      <Container>
        <TransactionsContainer>
          <div className="home-title_wrap -big">
            <span className="home-title">Transactions</span>
          </div>
          {
            hasStat ? (
              <>
                <TransactionsTable
                  items={data.items}
                />

                <div className="transactions__button-wrap">
                  <Button
                    className='transactions__button loading-btn'
                    type="submit"
                    disabled={loading}
                    onClick={() => setLoading(true)}
                  >
                    Download XLS
                    {loading ? <Loader /> : null}
                  </Button>
                </div>
              </>
            ) : (
              <>
                <NoContracts />
                <div className="home-title_wrap">
                  <span className="home-title">{t('statistics.title')}</span>
                </div>
                <Recommended items={data.recommended} />
              </>
            )
          }
        </TransactionsContainer>
      </Container>
    </MainContent>
  );
};

export default Transactions;
