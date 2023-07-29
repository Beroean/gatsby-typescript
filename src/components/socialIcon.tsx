import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface SocialIcon {
  link: string;
  label: string;
  icon: React.ReactNode;
}

function SocialIcon(props: SocialIcon) {
  const { link, icon, label } = props;
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      {icon}
    </a>
  );
}

export default SocialIcon;
