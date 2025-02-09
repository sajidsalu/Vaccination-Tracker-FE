import { FnCallBack } from "@/types/common.types";
import { PropsWithChildren, ReactNode } from "react";

export type CardLayoutProps = {
  title?: string;
  subtitle?: string;
  headerAction?: ReactNode;
  heightAuto?: boolean;
  enableExtraPadding?: boolean;
  disableHeaderMargin?: boolean;
  onClickBackButton?: FnCallBack;
} & Required<PropsWithChildren>;
