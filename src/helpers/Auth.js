export function isAuth() {
  const token = localStorage.getItem('token')
  if(token) return JSON.parse(token)
  return false
}