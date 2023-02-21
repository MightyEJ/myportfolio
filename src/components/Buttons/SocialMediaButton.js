import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";

function SocialMediaButton({ description, icon, color, link }) {
  return (
    <>
      <Button
        className="btn-icon-only rounded-circle"
        color={color}
        href={link}
        id={`button-${icon}-${color}`}
        target="_blank"
      >
        <span className="btn-inner--icon">
          <i className={`fa fa-${icon}`} />
        </span>
      </Button>
      <UncontrolledTooltip delay={0} target={`button-${icon}-${color}`}>
        {description}
      </UncontrolledTooltip>
    </>
  );
}

export default SocialMediaButton;
