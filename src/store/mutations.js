import storage from '@/util/storage'

export default {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
    storage.setItem('userInfo', userInfo)
  },
  setMenuList(state, list) {
    state.menuList = list
    storage.setItem('menuList', list)
  },
  setActionList(state, list) {
    state.actionList = list
    storage.setItem('actionList', list)
  },
  setWeatherData(state, data) {
    state.weatherData = data
    storage.setItem('weatherData', data)
  },
  // setLeaveCount(state, count) {
  //   state.leaveCount = count
  // },
  setNoticeCount(state, count) {
    state.noticeCount = count
  },
  changeTheme(state) {
    if (state.theme === 'chalk')
      state.theme = 'vintage'
    else
      state.theme = 'chalk'
  },
}
