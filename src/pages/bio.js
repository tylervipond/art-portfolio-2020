import React from "react"
import { css } from '@emotion/core';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageTitle } from "../components/page-title"
import { SPACE_MEDIUM, asRem } from '../styles';

const bioPage = () => (
  <Layout>
    <SEO title="Bio" />
    <PageTitle>Bio</PageTitle>
    <p css={css`max-width: 780px; margin: ${asRem(SPACE_MEDIUM)} 0 0`}>Tyler Vipond is a Toronto based artist working in sculpture, collage, and digital media. He graduated from OCADU in 2008 with a BFA in drawing and painting, and completed his MAFA degree at Central Saint Martins in 2011. Tyler has shown work in Canada, the U.S.A, the U.K. and Finland.</p>
  </Layout>
)

export default bioPage
