import * as React from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "../components/PageLayout.component";
import { AppHeader } from "../features/AppHeader.component";
import { Footer } from "../features/footer.component";
import { ArtworkList } from "../components/ArtworkList";
import aGeneralLackOfUnderstanding from "../data/aGeneralLackOfUnderstanding.json";
import { ArtworkListItem } from "../components/ArtworkListItem.component";
import { TextWithHeader } from "../components/TextWithHeader.component";
import styled from "styled-components";

const ArtworkListItemWrapper = styled("li")`
  max-width: 240px;
  min-width: 0;
`;
ArtworkListItemWrapper.displayName = "ArtworkListItemWrapper";

const AGeneralLackOfUnderstandingPage = () => {
  return (
    <PageLayout
      header={<AppHeader />}
      content={
        <>
          <TextWithHeader
            text={aGeneralLackOfUnderstanding.description}
            header={aGeneralLackOfUnderstanding.title}
            detail={aGeneralLackOfUnderstanding.detail}
          />
          <ArtworkList>
            {aGeneralLackOfUnderstanding.artworks.map((artwork) => (
              <ArtworkListItemWrapper key={artwork.title}>
                <ArtworkListItem {...artwork} />
              </ArtworkListItemWrapper>
            ))}
          </ArtworkList>
        </>
      }
      footer={<Footer />}
    />
  );
};

export default AGeneralLackOfUnderstandingPage;

export const Head: HeadFC = () => (
  <title>Tyler Vipond | A General Lack of Understanding</title>
);
