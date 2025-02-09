import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FC } from "react";
import { BreadcrumbProps } from "./Breadcrumbs.types";
import { Link as RouterLink } from "react-router-dom";

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { items, ...breadcrumbProps } = props;

  return (
    <Breadcrumbs aria-label="breadcrumb" {...breadcrumbProps}>
      {items.map((item, index: number) =>
        item.href ? (
          <Link component={RouterLink} key={index} underline="hover" variant="subtitle2" color="inherit" to={item.href}>
            {item.label}
          </Link>
        ) : (
          <Typography key={index} color="text.primary" variant="body2">
            {item.label}
          </Typography>
        ),
      )}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
