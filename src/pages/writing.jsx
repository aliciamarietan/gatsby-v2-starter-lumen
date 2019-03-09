import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Writing from '../components/Writing'
import Sidebar from '../components/Sidebar'

class WritingRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach(post => {
      items.push(<Writing data={post} key={post.node.fields.slug} />)
    })

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">{items}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default WritingRoute

export const pageQuery = graphql`
  query WritingRoute {
    site {
      siteMetadata {
        title
        subtitle
        menu {
          label
          path
        }
        author {
          name
          email
          twitter
          linkedin
          instagram
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: { layout: { eq: "writing" }, draft: { ne: true } }
      }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          html
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            category
            description
            order
          }
        }
      }
    }
  }
`
