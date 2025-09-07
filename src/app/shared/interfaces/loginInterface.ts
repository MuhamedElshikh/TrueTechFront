export interface singin {
  email: string;
  password: string;
}
export interface successLogin {
  displayName: string;
  email: string;
  token: string;
}
export interface FailLogin{
  statusMsg: string;
  message: string;
}
export interface Register extends singin{
  DisplayName: string;
  PhoneNumber: string;
  RePassword: string;
  username: string;
}
