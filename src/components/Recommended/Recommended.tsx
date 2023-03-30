import React from 'react';

import { RecommendedWrapper } from './Recommended.styles';
import { useTranslation } from "react-i18next";
import {Button} from "../../elements";

interface Props {
  items: any[];
}

const Recommended: React.FC<Props> = (props: Props) => {
  const { items } = props;
  const { t } = useTranslation();

  return (
    <RecommendedWrapper>
      <div className="grid-x grid-margin-x available-container">
        {
          items.map((item:any, index: number) => (
            <div
              key={`available-${index + 1}`}
              className={`cell grid-x small-8 xlarge-4 available-card -${item.color} -${item.type}`}
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
                    {t('recommended.btn')}
                  </Button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </RecommendedWrapper>
  );
};

export default Recommended;
