import api from './api'

export default () => {
  const getTheme = () => {
    return api.get('/themes')
  }
  return { getTheme }
}