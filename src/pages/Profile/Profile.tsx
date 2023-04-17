import React, {useCallback, useState} from 'react';
import {
  Button,
  Container, Input, Loader,
  MainContent,
  Select,
  PhoneInput,
} from '../../elements';
import { ProfileContainer } from "./Profile.Styles";
import { useTranslation } from "react-i18next";
import cloneDeep from "lodash/cloneDeep";
import { validateEmail } from "../../common/utils/validators";
import { connect } from "react-redux";
import {COUNTRIES, CountryWithLangs} from "../../const/countries.constants";
import {AppStateType} from "../../store";
import {selectErrorByKey, selectLoadingByKey} from "../../store/loadingsErrors/selectors";
import types from "../../store/actionTypes";

export type ProfileParams = {
  fullName: string;
  dateOfBirth: string;
  email: string;
  country: string;
  phone: string;
};

export interface ProfileProps {
  loading: boolean;
}

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const { loading } = props;
  const { t } = useTranslation();
  const countriesList = COUNTRIES.map((country: CountryWithLangs) => {
    return {
      value: country.code.toLowerCase(),
      text: country.en
    }
  })

  const [values, setValues] = useState<{ [key: string]: string }>({
    fullName: '',
    dateOfBirth: '',
    email: '',
    country: 'pt',
    phone: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  let getFormErrors: (data: { [p: string]: string }) => ProfileParams;
  getFormErrors = (data: { [key: string]: string }) => {
    const {email} = data;
    const newErrors: ProfileParams = {
      fullName: '',
      dateOfBirth: '',
      email: '',
      country: '',
      phone: '',
    };

    if (email && !validateEmail(email)) newErrors.email = 'profile.page.form.email.errors.valid';

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
      const newErrors: ProfileParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onChangePhone = (field: string, value: string, isValid: boolean) => {
    setValues(prev => ({
      ...prev,
      [field]: value,
    }));

    if (!isValid && value) {
      setErrors({
        ...errors,
        [field]: 'profile.page.form.phone.errors.valid',
      });
    }

    if (!value) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }

    if (isValid && value) {
      setErrors({
        ...errors,
        [field]: '',
      });
    }
  };

  const onBlur = (field: string) => {
    if (Object.prototype.hasOwnProperty.call(errors, field)) {
      const newValues = cloneDeep(values);
      const newErrors: ProfileParams = getFormErrors(newValues);

      setErrors({
        ...errors,
        [field]: newErrors[field],
      });
    }
  };

  const onSubmit = useCallback(
    (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      const newErrors: ProfileParams = getFormErrors(values);
      setErrors(newErrors);

      const data: ProfileParams = {
        fullName: values.fullName,
        dateOfBirth: values.dateOfBirth,
        email: values.email.toLowerCase(),
        country: values.dateOfBirth,
        phone: values.dateOfBirth,
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
        <ProfileContainer>
          <div className="home-title_wrap -big -hidden-large">
            <span className="home-title">Profile</span>
          </div>
          <div className="grid-x grid-margin-x profile">
            <div className="cell small-12 xlarge-5">
              <form className="profile-form" onSubmit={onSubmit}>
                <Input
                  className='profile-input'
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  placeholder={`${t('profile.page.form.fullName.placeholder')}`}
                  error={errors.fullName}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <Input
                  className='profile-input'
                  type="text"
                  name="dateOfBirth"
                  value={values.dateOfBirth}
                  placeholder={`${t('profile.page.form.dateOfBirth.placeholder')}`}
                  error={errors.dateOfBirth}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <Input
                  className='profile-input'
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder={`${t('profile.page.form.email.placeholder')}`}
                  error={errors.email}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <Select
                  className="profile__select lg"
                  name="country"
                  value={values.country}
                  placeholder={t('profile.page.form.country.placeholder')}
                  list={countriesList}
                  fullWidth
                  onChange={onChange}
                />
                <PhoneInput
                  className='profile-input'
                  placeholder={t('profile.page.form.phone.placeholder')}
                  value={values.phone}
                  name="phone"
                  error={errors.phone}
                  onChange={(value: string, isValid: boolean) =>
                    onChangePhone('phone', value, isValid)}
                />
                <div className="profile__button-wrap">
                  <Button
                    className='profile__button loading-btn'
                    type="submit"
                    disabled={loading}
                  >
                    {t('profile.btns.save')}
                    {loading ? <Loader /> : null}
                  </Button>
                </div>
              </form>
            </div>
            <div className="cell small-12 xlarge-7">
              <div className="verification">
                <div className="verification-title__wrap">
                  <span className="verification-title">{t('profile.page.verification.title')}</span>
                </div>
                <div className="verification-result__wrap">
                  <span className="verification-result">{t('profile.page.verification.notVerifyed')}</span>
                </div>
                <div className="verification-button__wrap">
                  <Button
                    className='verification-button loading-btn'
                    type="submit"
                    disabled={loading}
                  >
                    {t('profile.btns.verify')}
                    {loading ? <Loader /> : null}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ProfileContainer>
      </Container>
    </MainContent>
  );
};

const mapState = (state: AppStateType) => {
  return {
    loading: selectLoadingByKey(state, types.LOGIN_REQUEST),
    error: selectErrorByKey(state, types.LOGIN_REQUEST),
  };
};

export default connect(mapState)(Profile);
