import { httpService } from './httpService'


export const getIncomingCallInfo = ({ area, city, number }) =>
{
  return httpService.get(`chakushin/${area}/${city}/${number}`)

}

export const getTelephoneInfo = ({ area, city, number }) =>
{
  return httpService.get(`telephone/area/${area}/city/${city}/num/${number}`)
}

export const spamPlus = ({ area, city, number }) =>
{
  return httpService.get(`mplus/${area}/${city}/${number}`)
}

export const spamMinus = ({ area, city, number }) =>
{
  return httpService.get(`mminus/${area}/${city}/${number}`)
}

export const commentPlus = ({ id, area, city, number }) =>
{
  return httpService.get(`plus/${id}/${area}/${city}/${number}`)
}

export const commentMinus = ({ id, area, city, number }) =>
{
  return httpService.get(`minus/${id}/${area}/${city}/${number}`)
}

export const delReq = ({ id, area, city, number }) =>
{
  return httpService.get(`sakujo/${id}/${area}/${city}/${number}`)
}

export const SaveInfo = (formData, token) =>
{
  return httpService.post('add/jigho', formData, token)
}

export const search = ({ s }) =>
{
  return httpService.post('search', { s })
}