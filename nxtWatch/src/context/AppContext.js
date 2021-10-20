import React from 'react'

const AppContext = React.createContext({
  activeTabId: null,
  isDarkTheme: false,
  showBanner: true,
  toggleTheme: () => {},
  toggleShowBanner: () => {},
  changeActiveTabId: () => {},
})

export default AppContext
