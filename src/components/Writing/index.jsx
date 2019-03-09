import React from 'react'
import './style.scss'

class Writing extends React.Component {
  render() {
    const { title } = this.props.data.node.frontmatter
    const { html } = this.props.data.node

    return (
      <div className="post">
        <h2 className="post__title">{title}</h2>
        <div
          className="page__body"
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    )
  }
}

export default Writing
