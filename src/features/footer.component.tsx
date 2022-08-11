import * as React from "react";
import styled from "styled-components";
import { Button } from "../components/Button.component";
import { MailIcon } from "../components/icons/MailIcon.component";
import { MailingListIcon } from "../components/icons/MailingListIcon.component";
import { Typography } from "../components/Typography.component";

const FooterLayout = styled("footer")`
  display: grid;
  grid-auto-flow: row;
  gap: ${({ theme }) => theme.spacing[3] / 16}rem;
`;
FooterLayout.displayName = "FooterLayout";

const FooterButtonLayout = styled("div")`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme }) => theme.spacing[2] / 16}rem;
  justify-content: start;
`;
FooterButtonLayout.displayName = "FooterButtonLayout";

export const Footer = () => (
  <FooterLayout>
    <Typography as="h3" variant="sub-header">
      Want to talk to me? Want me to talk to you?
    </Typography>
    <FooterButtonLayout>
      <Button
        disabled
        icon={<MailingListIcon stroke="#E9E9E9" height="24" width="24" />}
      >
        Join the mailing list
      </Button>
      <Button
        as="a"
        href="mailto:tylervipond@gmail.com"
        icon={<MailIcon stroke="#E9E9E9" height="24" width="24" />}
      >
        Contact Me
      </Button>
    </FooterButtonLayout>
    <Typography variant="fine-print">&copy; Tyler Vipond 2022</Typography>
  </FooterLayout>
);
Footer.displayName = "Footer";
