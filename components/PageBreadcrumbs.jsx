import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const links = [{ href: "", label: "", color: "", isCurrentPage: false }];

function PageBreadcrumbs({ links }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {links.map(({ href, label, isCurrentPage }) => {
        return isCurrentPage ? (
          <Typography color="textPrimary">{label}</Typography>
        ) : (
          <Link color="primary" href={href}>
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default PageBreadcrumbs;
