import { httpService } from './httpService';
import axios from 'axios';

export const signUp = ({ login,
  password,
  name,
  familyName,
  middleName,
  phone,
  address,
  IP,
  city,
  isEntity,
  entityName,
  entityType,
  ITN,
  currentAccount,
  BIC,
  PSRNSP,
  IEC }) =>
{
  //   console.log(login, password);
  return httpService.post('auth/sign/up', {
    login,
    password,
    name,
    familyName,
    middleName,
    phone,
    address,
    IP,
    city,
    isEntity,
    entityName,
    entityType,
    ITN,
    currentAccount,
    BIC,
    PSRNSP,
    IEC
  })
}

export const logIn = ({ login, password }) =>
{
  return httpService.post('auth/sign/in', {
    login,
    password
  })
  // let apiEndpoint = 'auth/sign/in';
  // let payload = {
  //   login,
  //   password
  // }
  // return axios.post(config.baseUrl+apiEndpoint, payload).then((response)=>{
  //     return response;
  // }).catch((err)=>{
  //     console.log(err);
  // })
}

export const logOut = () =>
{
  return httpService.get('auth/logout');
}

export const passwordReset = () =>
{
  return httpService.put('users/password');
}