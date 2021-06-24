import {Component} from 'react'
import NavBar from '../NavBar'
import HomeSection from '../HomeSection'
import AboutSection from '../AboutSection'
import ProjectsSection from '../ProjectsSection'
import ContactSection from '../ContactSection'
import SocialMediaSection from '../SocialMediaSection'
import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

class Portfolio extends Component {
  state = {activeNavBarId: 0}

  changeActiveNavBarId = id => {
    this.setState({activeNavBarId: id})
  }

  renderComponent = () => {
    const {activeNavBarId} = this.state
    return {
      0: <HomeSection />,
      1: <AboutSection />,
      2: <ProjectsSection />,
      3: <ContactSection />,
    }[activeNavBarId]
  }

  render() {
    const {activeNavBarId} = this.state
    return (
      <div className="portfolio-container">
        <NavBar
          activeNavBarId={activeNavBarId}
          changeActiveNavBarId={this.changeActiveNavBarId}
          navBarItems={navBarItems}
        />
        <div className="portfolio-body">
          <div className="active-section">{this.renderComponent()}</div>
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default Portfolio
