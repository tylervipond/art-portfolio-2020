import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageTitle } from "../components/page-title/page-title"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle>Works</PageTitle>
  </Layout>
)

export default IndexPage
