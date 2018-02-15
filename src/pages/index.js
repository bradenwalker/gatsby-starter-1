import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome!</h1>
    <p>This is a site to document progress on my as-yet unnamed comic project.</p>
    <p>Thanks for stopping by!</p>
    <Link to="/plot-synopsis/">Plot Synopsis</Link>
  </div>
)

export default IndexPage
