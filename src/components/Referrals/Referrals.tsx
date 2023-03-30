import React from 'react';
import { connect } from 'react-redux';

import { ReferralsWrapper } from './Referrals.styles';
import { useTranslation } from "react-i18next";

interface Props {
  items: any[];
}

const Referrals: React.FC<Props> = (props: Props) => {
  const { items } = props;

  const { t } = useTranslation();

  return (
    <ReferralsWrapper>
      <div className="referrals">
        <div className="referrals-header__wrap">
          <div
            className="referrals-header"
          >
            Email
          </div>
          <div
            className="referrals-header"
          >
            Date
          </div>
          <div
            className="referrals-header"
          >
            Sum
          </div>
        </div>
        <div className="referrals-body__wrap">
          {
            items.map((item, index) => (
              <div
                key={`referral-${index + 1}`}
                className="referrals-body__row"
              >
                <div className="referrals-body__cell">
                  <span className="referrals-body__cell_text -date">{item.email}</span>
                </div>
                <div className="referrals-body__cell">
                  <span className="referrals-body__cell_text -date">{item.date}</span>
                </div>
                <div className="referrals-body__cell">
                  <span className="referrals-body__cell_text -title">{item.sum}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </ReferralsWrapper>
  );
};

export default connect()(Referrals);
