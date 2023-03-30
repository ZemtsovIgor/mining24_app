import React from 'react';
import { connect } from 'react-redux';

import { TransactionsWrapper } from './Transactions.styles';
import { useTranslation } from "react-i18next";

interface Props {
  items: any[];
}

const Transactions: React.FC<Props> = (props: Props) => {
  const { items } = props;

  const { t } = useTranslation();

  return (
    <TransactionsWrapper>
      <div className="transactions">
        <div className="transactions-header__wrap">
          <div
            className="transactions-header"
          >
            Date
          </div>
          <div
            className="transactions-header"
          >
            Sum
          </div>
          <div
            className="transactions-header"
          >
            Description
          </div>
        </div>
        <div className="transactions-body__wrap">
          {
            items.map((item, index) => (
              <div
                key={`transactions-${index + 1}`}
                className="transactions-body__row"
              >
                <div className="transactions-body__cell">
                  <span className="transactions-body__cell_text -date">{item.date}</span>
                </div>
                <div className="transactions-body__cell">
                  <span className="transactions-body__cell_text -title">{item.sum}</span>
                </div>
                <div className="transactions-body__cell">
                  <span className="transactions-body__cell_text">{item.desc}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </TransactionsWrapper>
  );
};

export default connect()(Transactions);
