export function validateEmail(email: string) {
  if (!email) return false;
  const reg = /^([a-z0-9_+\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  return reg.test(email);
}

export function validatePassword(password: string) {
  if (!password) return false;
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/i;
  return reg.test(password);
}
