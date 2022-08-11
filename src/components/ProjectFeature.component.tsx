import * as React from "react";
import styled from "styled-components";
import { ProjectFeatureInfo } from "./ProjectFeatureInfo.component";
import { Thumbnail } from "./Thumbnail.component";

const ProjectFeatureLayout = styled("div")`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme }) => theme.spacing[4] / 16}rem;
  justify-content: start;
`;
ProjectFeatureLayout.displayName = "ProjectFeatureLayout";

export interface ProjectFeatureProps {
  title: string;
  description: string;
  action: React.ReactComponentElement<any>;
  imageSrc: string;
}

export const ProjectFeature: React.FC<ProjectFeatureProps> = ({
  title,
  description,
  action,
  imageSrc,
}) => (
  <ProjectFeatureLayout>
    <Thumbnail size="large" src={imageSrc} />
    <ProjectFeatureInfo
      title={title}
      description={description}
      action={action}
    />
  </ProjectFeatureLayout>
);
ProjectFeature.displayName = "ProjectFeature";
