import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import { PageTitle } from "../components/page-title"
import SEO from "../components/seo"
import { CvSection } from '../components/cv-section';
import { SectionTitle } from '../components/section-title';
import { SPACE_SMALL, asRem, SPACE_MEDIUM } from '../styles';

const TITLE_MARGIN = `${asRem(SPACE_MEDIUM)} 0 ${asRem(SPACE_SMALL)}`;

const cvPage = ({ data: { allAwards, allEducation, allGroupShow, allSoloShow, allTwoPersonShow } }) => (
  <Layout>
    <SEO title="CV"></SEO>
    <PageTitle>CV</PageTitle>
    <SectionTitle margin={TITLE_MARGIN}>Education</SectionTitle>
    <CvSection items={allEducation.nodes} />
    <SectionTitle margin={TITLE_MARGIN}>Awards</SectionTitle>
    <CvSection items={allAwards.nodes} />
    <SectionTitle margin={TITLE_MARGIN}>Solo Shows</SectionTitle>
    <CvSection items={allSoloShow.nodes} />
    <SectionTitle margin={TITLE_MARGIN}>Two Person Shows</SectionTitle>
    <CvSection items={allTwoPersonShow.nodes} />
    <SectionTitle margin={TITLE_MARGIN}>Group Shows</SectionTitle>
    <CvSection items={allGroupShow.nodes} />
  </Layout>
)

export default cvPage

export const pageQuery = graphql`
query MyQuery {
  allAwards {
    nodes {
      title
      venue
      year
      order
      location
    }
  }
  allEducation {
    nodes {
      year
      venue
      title
      order
      location
      category
    }
  }
  allGroupShow {
    nodes {
      year
      venue
      title
      order
      location
      category
    }
  }
  allSoloShow {
    nodes {
      year
      venue
      title
      order
      location
      category
    }
  }
  allTwoPersonShow {
    nodes {
      year
      venue
      title
      order
      location
      category
    }
  }
}
`
