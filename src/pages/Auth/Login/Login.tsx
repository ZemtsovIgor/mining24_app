import cloneDeep from 'lodash/cloneDeep';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { validateEmail, validatePassword } from '../../../common/utils/validators';
import {
  Button,
  Title,
  Input,
  Loader, LanguageSelector,
} from '../../../elements';
import { LoginStyles } from './Login.Styles';
import { LogInParams } from "../../../api";
import {PATHS} from "../../../const/paths.constants";
import { AppStateType } from '../../../store';
import types from '../../../store/actionTypes';
import { selectErrorByKey, selectLoadingByKey } from '../../../store/loadingsErrors/selectors';
import { login } from '../../../store/user/actions';

export interface LogInProps {
  loading: boolean;
  error: string | null;
  login: (payload: LogInParams | any) => void;
}

const Registration: React.FC<LogInProps> = (props: LogInProps) => {
  const { loading, login, error } = props;
  const { t } = useTranslation();

  const [values, setValues] = useState<{ [key: string]: string }>({
    email: '',
    password: '',
  });
  const [showInput, setShowInput] = useState<{ [key: string]: boolean }>({
    password: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  let getFormErrors: (data: { [p: string]: string }) => LogInParams;
  getFormErrors = (data: { [key: string]: string }) => {
    const {email, password} = data;
    const newErrors: LogInParams = {
      email: '',
      password: '',
    };

    if (!password) newErrors.password = 'registration.page.form.password.errors.empty';
    if (password && !validatePassword(password)) newErrors.password = 'registration.page.form.password.errors.valid';

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
      const newErrors: LogInParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onBlur = (field: string) => {
    if (Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      const newErrors: LogInParams = getFormErrors(newValues);

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
      const newErrors: LogInParams = getFormErrors(values);
      setErrors(newErrors);

      const data: LogInParams = {
        email: values.email.toLowerCase(),
        password: values.password,
      };

      if (!checkErrors(newErrors)) {
        login(data);
      }
    },
    [login, values, getFormErrors]
  );

  return (
    <LoginStyles className='login'>
      <div className="login__image -hidden-small" />
      <div className="login__container">
        {error && (
          <div className="error__text-wrap">
            <p className="error__text">{t(`error.${error}`)}</p>
          </div>
        )}
        <div className="login__lang-wrap -hidden-small">
          <LanguageSelector />
        </div>
        <div className="login__wrap">
          <div className={`login__box ${error ? '-error' : ''}`}>
            <Title className='login__title'>
              {t('login.page.title')}
            </Title>

            <div className="login__text-wrap">
              <p className="login__text" >{t('login.page.texts.text')}</p>
              <Link className="login__text-link" to={PATHS.REGISTRATION}>{t('login.link.registration')}</Link>
            </div>

            <form onSubmit={onSubmit}>
              <Input
                className='lg bold'
                type="email"
                name="email"
                value={values.email}
                placeholder={`${t('login.page.form.email.placeholder')}`}
                error={error ? t(`error.${error}`) : errors.email}
                onChange={onChange}
                onBlur={onBlur}
              />
              <Input
                className='lg bold'
                type="password"
                name="password"
                placeholder={`${t('login.page.form.password.placeholder')}`}
                error={error ? t(`error.${error}`) : errors.password}
                onChange={onChange}
                onBlur={onBlur}
                show={showInput.password}
                onShow={onToggleShow}
              />
              <div className="login__button-wrap">
                <Button
                  className='login__button loading-btn'
                  type="submit"
                  disabled={loading}
                >
                  {t('login.btns.login')}
                  {loading ? <Loader /> : null}
                </Button>
              </div>

            </form>

            <div className="login__links">
              <Link className="login__links-link" to={PATHS.FORGOT_PASSWORD}>{t('login.link.forgot_password')}</Link>
            </div>
          </div>
        </div>
        <div className="login__lang-wrap -hidden-large">
          <LanguageSelector />
        </div>
      </div>
    </LoginStyles>
  );
};

const mapState = (state: AppStateType) => {
  return {
    loading: selectLoadingByKey(state, types.LOGIN_REQUEST),
    error: selectErrorByKey(state, types.LOGIN_REQUEST),
  };
};

export default connect(mapState, { login })(Registration);
