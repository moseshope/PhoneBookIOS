import {httpService} from './httpService';

export const getRecentuserData = () => {
  return httpService.get('users/info');
}

export const getUsers = () => {
   return httpService.get('users/');
}

export const creatUser = ({
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
}) => {
   return httpService.post('users/', {
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

export const updateById = ([id, {
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
}]) => {
    return httpService.post(`users/${id}`, {
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

export const getUserById = ({id}) => {
   return httpService.get(`users/:${id}`);
}