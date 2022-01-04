export let API = process.env.REACT_APP_DEVLOPMENT_API_URL

if (process.env.NODE_ENV === 'production') {
  API = process.env.REACT_APP_PRODUCTION_API_URL
}