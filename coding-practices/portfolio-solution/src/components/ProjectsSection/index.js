import {Component} from 'react'

import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

class ProjectsSection extends Component {
  renderProjectsList = () =>
    projectsData.map(project => (
      <li className="project-item" key={project.id}>
        <img className="project-image" src={project.imageUrl} alt="work" />
        <p className="project-name">{project.name}</p>
      </li>
    ))

  render() {
    return (
      <div>
        <h1 className="projects-heading">My Work</h1>
        <ul className="projects-list">{this.renderProjectsList()}</ul>
      </div>
    )
  }
}

export default ProjectsSection
