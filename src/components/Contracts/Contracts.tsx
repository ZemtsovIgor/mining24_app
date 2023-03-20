import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Area, AreaChart } from 'recharts'
import { Link } from 'react-router-dom';

import {ContractsWrapper} from './Contracts.styles';
import {useTranslation} from "react-i18next";
import {PATHS} from "../../const/paths.constants";

interface Props {
  items: any[];
}

const Contracts: React.FC<Props> = (props: Props) => {
  const { items } = props;

  const { t } = useTranslation();

  return (
    <ContractsWrapper>
      <div className="contracts">
        <div className="contracts-header__wrap">
          <div
            className="contracts-header"
          >
            {t('contracts.header.name')}
          </div>
          <div
            className="contracts-header"
          >
            Hashrate
          </div>
          <div
            className="contracts-header"
          >
            Until
          </div>
          <div
            className="contracts-header"
          >
            Earned
          </div>
          <div
            className="contracts-header"
          >
            Statistics
          </div>
        </div>
        <div className="contracts-body__wrap">
          {
            items.map((item) => (
              <Link
                to={`${PATHS.CONTRACT}/${item.name.toLowerCase()}`}
                key={item.name}
                className="contracts-body__row"
              >
                <div className="contracts-body__cell">
                  <span className="contracts-body__cell_text">{item.name}</span>
                </div>
                <div className="contracts-body__cell">
                  <span className="contracts-body__cell_text">{item.hashrate} H/s</span>
                </div>
                <div className="contracts-body__cell">
                  <span className="contracts-body__cell_text">{item.until}</span>
                </div>
                <div className="contracts-body__cell">
                  <span className="contracts-body__cell_text">{item.earned}</span>
                </div>
                <div className="contracts-body__cell">
                  <div className="contracts-body__cell_chart">
                    <AreaChart
                      data={item.statistics}
                      width={154}
                      height={41}
                      margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <Area dataKey="value" type="monotone" stroke='#00B933' fill="url(#gradient)" strokeWidth={1.6} />
                    </AreaChart>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </ContractsWrapper>
  );
};

export default connect()(Contracts);
