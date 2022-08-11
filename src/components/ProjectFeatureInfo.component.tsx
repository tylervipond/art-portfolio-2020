import * as React from "react";
import styled from "styled-components";
import { TextWithHeader } from "./TextWithHeader.component";

const ProjectFeatureInfoLayout = styled("div")`
  display: grid;
  grid-auto-flow: row;
  gap: ${({ theme }) => theme.spacing[3] / 16}rem;
  justify-items: start;
  align-content: start;
  max-width: 480px;
`;
ProjectFeatureInfoLayout.displayName = "ProjectFeatureInfoLayout";

export interface ProjectFeatureInfoProps {
  title: string;
  description: string;
  action: React.ReactComponentElement<any>;
}

export const ProjectFeatureInfo: React.FC<ProjectFeatureInfoProps> = ({
  title,
  description,
  action,
}) => (
  <ProjectFeatureInfoLayout>
    <TextWithHeader header={title} text={description} />
    {action}
  </ProjectFeatureInfoLayout>
);
ProjectFeatureInfo.displayName = "ProjectFeatureInfo";
