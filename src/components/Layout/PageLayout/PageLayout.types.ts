import { BreadcrumbItem } from "@/ui-lib/components/Breadcrumbs";
import { SxProps } from "@/ui-lib/utils/themeUtils";
import { PropsWithChildren, ReactNode } from "react";

export type PageLayoutProps = {
  showButton?: ReactNode; // TODO - temporary prop, update with cb,
  breadcrumbs: BreadcrumbItem[];
  loading?: boolean;
  containerStyle?: SxProps;
} & Required<PropsWithChildren>;
