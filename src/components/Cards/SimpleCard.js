import React from "react";
import { Badge, Button, Card, CardBody } from "reactstrap";

export const SimpleCard = ({
  icon,
  title,
  description,
  color,
  link,
  badges,
}) => {
  const returnBadge = () => {
    return badges?.map((badge) => (
      <Badge color={color} pill className="mr-1">
        {badge}
      </Badge>
    ));
  };
  return (
    <Card className="card-lift--hover shadow border-0" h-auto>
      <CardBody className="py-5">
        <div
          className={`icon icon-shape icon-shape-${color} rounded-circle mb-4`}
        >
          <i className={`ni ni-${icon}`} />
        </div>
        <h6 className="text-primary text-uppercase">{title}</h6>
        <p className="description mt-3">{description}</p>
        <div>{returnBadge()}</div>
        <Button
          className="mt-4"
          color={color}
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          Learn more
        </Button>
      </CardBody>
    </Card>
  );
};
