import cloneDeep from 'lodash/cloneDeep';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { validateEmail } from '../../../common/utils/validators';
import { PATHS } from '../../../const/paths.constants';
import {
  Button,
  Title,
  Input,
  Loader,
} from '../../../elements';
import { ForgotPasswordStyles } from './ForgotPassword.Styles';
import { AppStateType } from '../../../store';
import types from '../../../store/actionTypes';
import { selectErrorByKey, selectLoadingByKey } from '../../../store/loadingsErrors/selectors';
import { forgotPassword } from '../../../store/user/actions';
import { ForgotPasswordParams } from "../../../api";
import { UserReducerState } from '../../../store/user/reducers';

export interface ForgotPasswordProps {
  user: UserReducerState;
  loading: boolean;
  error: string | null;
  forgotPassword: (payload: ForgotPasswordParams | any) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = (props: ForgotPasswordProps) => {
  const { user, error, loading, forgotPassword } = props;
  const { t } = useTranslation();

  const [values, setValues] = useState<{ [key: string]: string }>({
    email: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  let getFormErrors: (data: { [p: string]: string }) => ForgotPasswordParams;
  getFormErrors = (data: { [key: string]: string }) => {
    const {email} = data;
    const newErrors: ForgotPasswordParams = {
      email: '',
    };

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
      const newErrors: ForgotPasswordParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onBlur = (field: string) => {
    if (Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      const newErrors: ForgotPasswordParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onSubmit = useCallback(
    (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      const newErrors: ForgotPasswordParams = getFormErrors(values);
      setErrors(newErrors);

      const data: ForgotPasswordParams = {
        email: values.email.toLowerCase(),
      };

      if (!checkErrors(newErrors)) {
        forgotPassword(data);
      }
    },
    [forgotPassword, values, getFormErrors]
  );

  return (
    <ForgotPasswordStyles className='forgotPassword'>
      <div className="forgotPassword__image" />
      <div className="forgotPassword__container">
        {error && (
          <div className="forgotPassword__text-wrap">
            <p className="forgotPassword__text">{t(`error.${error}`)}</p>
          </div>
        )}
        <div className="forgotPassword__box">
          <Title className='forgotPassword__title'>
            {t('forgotPassword.page.title')}
          </Title>

          {
            user.newPasswordSanded ? (
              <>
                <div className="forgotPassword__text-wrap">
                  <p className="forgotPassword__text" >{t('forgotPassword.page.texts.new_password')}</p>
                </div>
                <div className="forgotPassword__button-wrap">
                  <Link className="forgotPassword__button" to={PATHS.DASHBOARD}>{t('forgotPassword.btns.login')}</Link>
                </div>
              </>
            ) : (
              <>
                <div className="forgotPassword__text-wrap">
                  <p className="forgotPassword__text" >{t('forgotPassword.page.texts.text')}</p>
                  <Link className="forgotPassword__text-link" to={PATHS.REGISTRATION}>{t('forgotPassword.link.registration')}</Link>
                </div>

                <form onSubmit={onSubmit}>
                  <Input
                    className='lg bold'
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder={`${t('forgotPassword.page.form.email.placeholder')}`}
                    error={error ? t(`error.${error}`) : errors.email}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  <div className="forgotPassword__button-wrap">
                    <Button
                      className='forgotPassword__button loading-btn'
                      type="submit"
                      disabled={loading}
                    >
                      {t('forgotPassword.btns.reset_password')}
                      {loading ? <Loader /> : null}
                    </Button>

                    <Link className="forgotPassword__button-link" to={PATHS.LOGIN}>{t('forgotPassword.btns.cancel')}</Link>
                  </div>
                </form>
              </>

            )
          }
        </div>
      </div>
    </ForgotPasswordStyles>
  );
};

const mapState = (state: AppStateType) => {
  const { user } = state;
  return {
    user,
    loading: selectLoadingByKey(state, types.FORGOT_PASSWORD_REQUEST),
    error: selectErrorByKey(state, types.FORGOT_PASSWORD_REQUEST),
  };
};

export default connect(mapState, { forgotPassword })(ForgotPassword);
