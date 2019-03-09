import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      email: author.email,
      twitter: author.twitter,
      linkedin: author.linkedin,
      instagram: author.instagram,
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.twitter.com/${links.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.github.com/${links.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.vk.com/${links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-linkedin" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.vk.com/${links.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-instagram" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
