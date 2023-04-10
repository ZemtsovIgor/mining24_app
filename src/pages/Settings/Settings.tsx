import React, {useCallback, useState} from 'react';
import {
  Button,
  Container, Input, Loader,
  MainContent,
} from '../../elements';
import { SettingsContainer } from "./Settings.Styles";
import { useTranslation } from "react-i18next";
import cloneDeep from "lodash/cloneDeep";
import {validateEmail, validatePassword} from "../../common/utils/validators";
import {connect} from "react-redux";

export type ChangePasswordParams = {
  password: string;
  newPassword: string;
  confPassword: string;
  email: string;
};

export interface SettingsProps {
  loading: boolean;
}

const Settings: React.FC<SettingsProps> = (props: SettingsProps) => {
  const { loading } = props;
  const { t } = useTranslation();

  const [values, setValues] = useState<{ [key: string]: string }>({
    password: '',
    newPassword: '',
    confPassword: '',
    email: '',
  });
  const [showInput, setShowInput] = useState<{ [key: string]: boolean }>({
    password: false,
    newPassword: false,
    confPassword: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  let getFormErrors: (data: { [p: string]: string }) => ChangePasswordParams;
  getFormErrors = (data: { [key: string]: string }) => {
    const {password, newPassword, confPassword, email} = data;
    const newErrors: ChangePasswordParams = {
      password: '',
      newPassword: '',
      confPassword: '',
      email: '',
    };

    if (!password) newErrors.password = 'settings.page.form.password.errors.empty';
    if (password && !validatePassword(password)) newErrors.password = 'settings.page.form.password.errors.valid';
    if (!newPassword) newErrors.password = 'settings.page.form.password.errors.empty';
    if (newPassword && !validatePassword(newPassword)) newErrors.password = 'settings.page.form.password.errors.valid';
    if (!confPassword) newErrors.confPassword = 'settings.page.form.confPassword.errors.empty';
    if (newPassword !== confPassword)
      newErrors.confPassword = 'settings.page.form.confPassword.errors.not_match';

    if (!email) newErrors.email = 'settings.page.form.email.errors.empty';
    if (email && !validateEmail(email)) newErrors.email = 'settings.page.form.email.errors.valid';

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
      const newErrors: ChangePasswordParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onBlur = (field: string) => {
    if (Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      const newErrors: ChangePasswordParams = getFormErrors(newValues);

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
      const newErrors: ChangePasswordParams = getFormErrors(values);
      setErrors(newErrors);

      const data: ChangePasswordParams = {
        password: values.password,
        newPassword: values.newPassword,
        confPassword: values.confPassword,
        email: values.email.toLowerCase(),
      };

      if (!checkErrors(newErrors)) {
        console.log(data);
      }
    },
    [values, getFormErrors]
  );

  return (
    <MainContent className="content-main home-page">
      <Container>
        <SettingsContainer>
          <div className="home-title_wrap -big -hidden-large">
            <span className="home-title">Settings</span>
          </div>
          <div className="grid-x settings">
            <div className="cell small-12 xlarge-5">
              <div className="home-title_wrap">
                <span className="home-title">{t('settings.page.texts.account')}</span>
              </div>
              <div className="home-subtitle_wrap">
                <span className="home-subtitle">{t('settings.page.texts.changePassword')}</span>
              </div>

              <form className="settings-form" onSubmit={onSubmit}>
                <Input
                  className='settings-input'
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder={`${t('settings.page.form.password.placeholder')}`}
                  error={errors.password}
                  onChange={onChange}
                  onBlur={onBlur}
                  show={showInput.password}
                  onShow={onToggleShow}
                />
                <Input
                  className='settings-input'
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder={`${t('settings.page.form.newPassword.placeholder')}`}
                  error={errors.password}
                  onChange={onChange}
                  onBlur={onBlur}
                  show={showInput.password}
                  onShow={onToggleShow}
                />
                <Input
                  className='settings-input'
                  type="password"
                  name="confPassword"
                  value={values.confPassword}
                  placeholder={`${t('settings.page.form.confPassword.placeholder')}`}
                  error={errors.confPassword}
                  onChange={onChange}
                  onBlur={onBlur}
                  show={showInput.confPassword}
                  onShow={onToggleShow}
                />
                <div className="home-subtitle_wrap">
                  <span className="home-subtitle">{t('settings.page.texts.changeEmail')}</span>
                </div>
                <Input
                  className='settings-input'
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder={`${t('settings.page.form.email.placeholder')}`}
                  error={errors.email}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <Input
                  className='settings-input'
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder={`${t('settings.page.form.password.placeholder')}`}
                  error={errors.password}
                  onChange={onChange}
                  onBlur={onBlur}
                  show={showInput.password}
                  onShow={onToggleShow}
                />
                <div className="settings__button-wrap">
                  <Button
                    className='settings__button loading-btn'
                    type="submit"
                    disabled={loading}
                  >
                    {t('settings.btns.save')}
                    {loading ? <Loader /> : null}
                  </Button>
                </div>
              </form>

              <div className="home-title_wrap">
                <span className="home-title">{t('settings.page.texts.finance')}</span>
              </div>

              <form className="settings-form" onSubmit={onSubmit}>
                <Input
                  className='settings-input'
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder={`${t('settings.page.form.address.placeholder')}`}
                  error={errors.password}
                  onChange={onChange}
                  onBlur={onBlur}
                  show={showInput.password}
                  onShow={onToggleShow}
                />
                <Input
                  className='settings-input'
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder={`${t('settings.page.form.sum.placeholder')}`}
                  error={errors.password}
                  onChange={onChange}
                  onBlur={onBlur}
                  show={showInput.password}
                  onShow={onToggleShow}
                />
                <div className="settings__button-wrap">
                  <Button
                    className='settings__button loading-btn'
                    type="submit"
                    disabled={loading}
                  >
                    {t('settings.btns.save')}
                    {loading ? <Loader /> : null}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </SettingsContainer>
      </Container>
    </MainContent>
  );
};

export default connect()(Settings);
