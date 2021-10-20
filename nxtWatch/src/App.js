import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import AppContext from './context/AppContext'
import './App.css'

const getTheme = () => {
  let appData = JSON.parse(localStorage.getItem('app_data'))

  if (appData === null) {
    appData = {
      isDarkTheme: false,
      savedVideosList: [],
      likedVideosList: [],
    }
    localStorage.setItem('app_data', JSON.stringify(appData))
  }
  return appData.isDarkTheme
}

class App extends Component {
  state = {
    isDarkTheme: getTheme(),
    activeTabId: 'HOME',
    showBanner: true,
  }

  changeActiveTabId = activeTabId => {
    this.setState({activeTabId})
  }

  toggleTheme = () => {
    const {isDarkTheme} = this.state
    const appData = JSON.parse(localStorage.getItem('app_data'))
    appData.isDarkTheme = !isDarkTheme
    localStorage.setItem('app_data', JSON.stringify({...appData}))

    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  toggleBannerStatus = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  render() {
    const {activeTabId, isDarkTheme, showBanner} = this.state
    return (
      <AppContext.Provider
        value={{
          activeTabId,
          isDarkTheme,
          showBanner,
          toggleTheme: this.toggleTheme,
          toggleBannerStatus: this.toggleBannerStatus,
          changeActiveTabId: this.changeActiveTabId,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute path="/not-found" component={NotFound} />
          <Route isAuthenticatedUser="false" component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
