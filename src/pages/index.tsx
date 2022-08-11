import * as React from "react";
import type { HeadFC } from "gatsby";
import { Button } from "../components/Button.component";
import { PageLayout } from "../components/PageLayout.component";
import { AppHeader } from "../features/AppHeader.component";
import { ProjectFeatureList } from "../components/ProjectFeatureList.component";
import projectList from "../data/projectList.json";
import { ProjectFeature } from "../components/ProjectFeature.component";
import { ArrowRightIcon } from "../components/icons/ArrowRightIcon.component";
import { Footer } from "../features/footer.component";

const IndexPage = () => {
  return (
    <PageLayout
      header={<AppHeader />}
      content={
        <ProjectFeatureList>
          {projectList.map(({ url, actionLabel, ...project }) => (
            <li key={project.title}>
              <ProjectFeature
                {...project}
                action={
                  <Button
                    as="a"
                    href={url}
                    target={project.target === "external" ? "_blank" : ""}
                    icon={
                      <ArrowRightIcon stroke="#E9E9E9" height="24" width="24" />
                    }
                  >
                    {actionLabel}
                  </Button>
                }
              />
            </li>
          ))}
        </ProjectFeatureList>
      }
      footer={<Footer />}
    />
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Tyler Vipond</title>;
