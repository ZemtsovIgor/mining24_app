import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';

import { Icon } from '../Icon/Icon';
import {
  ReferralCopy,
  ReferralField,
  ReferralInputBlock,
} from './ReferralInput.Styles';

interface Props {
  id?: string;
  className?: string;
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  text?: string;
}

export const ReferralInput: React.FC<Props> = (props: Props) => {
  const { id, className, name, type, placeholder, value, text } = props;
  const { t } = useTranslation();

  return (
    <ReferralInputBlock className={`ref-input ${className}`}>
      <div className='ref-input__wrap'>
        <span className='ref-input__text'>{text}</span>
        <ReferralField
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled
          defaultValue={value}
        />
      </div>
      <CopyToClipboard text={`${value}`}>
        <ReferralCopy className="ref-input__btn" type="button" data-title={`${t('common.copy')}`}>
          <Icon name="referral" size="23" />
        </ReferralCopy>
      </CopyToClipboard>
    </ReferralInputBlock>
  );
};

export default ReferralInput;
