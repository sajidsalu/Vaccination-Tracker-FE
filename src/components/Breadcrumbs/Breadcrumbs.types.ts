import { BreadcrumbsProps as MuiBreadcrumbsProps } from "@mui/material/Breadcrumbs";

export type BreadcrumbItem = {
  href?: string;
  label: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
} & MuiBreadcrumbsProps;
