import { makeHandler } from './makeHandler';

export const logIn = makeHandler(
  'logIn',
  (data: LogInParams) => ({
    method: 'POST',
    path: '/auth/login/',
    data,
  }),
  (res: LogInResponse) => res.data
);

export const registration = makeHandler(
  'registration',
  (data: RegistrationParams) => ({
    method: 'POST',
    path: '/auth/signup/',
    data,
  }),
  (res: RegistrationResponse) => res.data
);

export const forgotPassword = makeHandler(
  'forgotPassword',
  (data: ForgotPasswordParams) => ({
    method: 'POST',
    path: '/auth/recovery_password_send_code/',
    data,
  }),
  (res: LogInResponse) => res.data
);

export type LogInParams = {
  /** e-mail */
  email: string;
  /** Password */
  password: string;
};

export type RegistrationParams = {
  /** e-mail */
  email?: string;
  /** Id inviter */
  inviter?: string;
  /** Password */
  password: string;
  /** Confirm Password */
  confPassword: string;
};

export type ForgotPasswordParams = {
  /** e-mail */
  email?: string;
};

export type LogInResponse = {
  data: {
    code: string;
    verificationToken: string;
  }
};

export type RegistrationResponse = {
  data: {
    code: string;
    verificationToken: string;
  }
};
