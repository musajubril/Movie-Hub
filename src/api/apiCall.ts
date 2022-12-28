import apiToken from './apiToken'

export const getRequest = async ({ url } : {url: string}) => {
  const response = await apiToken.get(url)
  return response.data
}