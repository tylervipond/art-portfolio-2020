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

  @media screen and (max-width: 1024px) {
    gap: ${({ theme }) => theme.spacing[2] / 16}rem;
  }
`;
ProjectFeatureInfoLayout.displayName = "ProjectFeatureInfoLayout";

export interface ProjectFeatureInfoProps {
  title: string;
  description: string;
  detail: string;
  action: React.ReactComponentElement<any>;
}

export const ProjectFeatureInfo: React.FC<ProjectFeatureInfoProps> = ({
  title,
  description,
  detail,
  action,
}) => (
  <ProjectFeatureInfoLayout>
    <TextWithHeader header={title} text={description} detail={detail} />
    {action}
  </ProjectFeatureInfoLayout>
);
ProjectFeatureInfo.displayName = "ProjectFeatureInfo";
