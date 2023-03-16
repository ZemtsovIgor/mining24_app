import cloneDeep from 'lodash/cloneDeep';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { validateEmail, validatePassword } from '../../../common/utils/validators';
import { STORAGE_KEYS } from '../../../const/storage_keys.constants';
import {
  Button,
  Title,
  Input,
  Loader,
} from '../../../elements';
import { RegistrationStyles } from './Registration.Styles';
import {RegistrationParams} from "../../../api";

export interface RegistrationProps {
  loading: boolean;
  error: string | null;
  location: any;
}

const Registration: React.FC<RegistrationProps> = (props: RegistrationProps) => {
  const { error, loading, location } = props;
  const { t } = useTranslation();

  const query = new URLSearchParams(location.search);
  const queryRef = query.get(STORAGE_KEYS.REF_ID) || '';

  const [values, setValues] = useState<{ [key: string]: string }>({
    inviter: queryRef || '',
    email: '',
    password: '',
    confPassword: '',
  });
  const [showInput, setShowInput] = useState<{ [key: string]: boolean }>({
    password: false,
    confPassword: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  let getFormErrors: (data: { [p: string]: string }) => RegistrationParams;
  getFormErrors = (data: { [key: string]: string }) => {
    const {email, password, confPassword} = data;
    const newErrors: RegistrationParams = {
      email: '',
      password: '',
      confPassword: '',
    };

    if (!password) newErrors.password = 'registration.page.form.password.errors.empty';
    if (password && !validatePassword(password)) newErrors.password = 'registration.page.form.password.errors.valid';
    if (!confPassword) newErrors.confPassword = 'registration.page.form.confPassword.errors.empty';
    if (password !== confPassword)
      newErrors.confPassword = 'registration.page.form.confPassword.errors.not_match';

    if (!email) newErrors.email = 'registration.page.form.email.errors.empty';
    if (email && !validateEmail(email)) newErrors.email = 'login.page.form.email.errors.valid';

    return newErrors;
  };

  const checkErrors = (data: { [key: string]: string }) => {
    for (const error in data) {
      if (data[error]) return true;
    }
    return false;
  };

  const onChange = (field: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: value,
    }));

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }

    if (!value && Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      newValues[field] = value;
      const newErrors: RegistrationParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onBlur = (field: string) => {
    if (Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      const newErrors: RegistrationParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onToggleShow = (field: string) => {
    if (Object.prototype.hasOwnProperty.call(showInput, field)) {
      setShowInput({
        ...showInput,
        [field]: !showInput[field],
      });
    }
  };

  const onSubmit = useCallback(
    (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      const newErrors: RegistrationParams = getFormErrors(values);
      setErrors(newErrors);

      const data: RegistrationParams = {
        password: values.password,
        confPassword: values.confPassword,
      };

      if (values.inviter) {
        data.inviter = values.inviter;
      }

      data.email = values.email.toLowerCase();

      if (!checkErrors(newErrors)) {
        console.log(data);
      }
    },
    [values, getFormErrors]
  );

  return (
    <RegistrationStyles className='registration'>
      <div className="registration__container">
        <div className="registration__box">
          {error && <div className="error-text">{t(`${error}`)}</div>}

          <Title className='registration__title'>
            {t('registration.page.title')}
          </Title>

          <form onSubmit={onSubmit}>
            <Input
              className='lg bold'
              type="email"
              name="email"
              label={`${t('registration.page.form.email.label')}`}
              value={values.email}
              placeholder={`${t('registration.page.form.email.placeholder')}`}
              error={errors.email}
              onChange={onChange}
              onBlur={onBlur}
            />
            <Input
              className='lg bold'
              type="password"
              name="password"
              label={`${t('registration.page.form.password.label')}`}
              value={values.password}
              placeholder={`${t('registration.page.form.password.placeholder')}`}
              error={errors.password}
              onChange={onChange}
              onBlur={onBlur}
              show={showInput.password}
              onShow={onToggleShow}
            />
            <Input
              className='lg bold'
              type="password"
              name="confPassword"
              label={`${t('registration.page.form.confPassword.label')}`}
              value={values.confPassword}
              placeholder={`${t('registration.page.form.confPassword.placeholder')}`}
              error={errors.confPassword}
              onChange={onChange}
              onBlur={onBlur}
              show={showInput.confPassword}
              onShow={onToggleShow}
            />
            <div className="registration__button-wrap">
              <Button
                className='registration__button'
                type="submit"
                disabled={loading}
              >
                {t('registration.btns.registration')}
                {loading ? <Loader /> : null}
              </Button>
            </div>

          </form>

        </div>
      </div>
    </RegistrationStyles>
  );
};

export default connect()(Registration);
