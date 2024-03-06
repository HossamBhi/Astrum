import { HTMLProps } from "react";
import DashHeader, { dashheaderProps } from "./DashHeader";

const DashWrapper = ({
  children,
  className,
  isShowLogin,
  isHideHeader = false,
  ...props
}: HTMLProps<HTMLDivElement> &
  dashheaderProps & { isHideHeader?: boolean }) => {
  return (
    <div {...props}>
      {!isHideHeader && <DashHeader isShowLogin={isShowLogin} />}
      {children}
    </div>
  );
};

export default DashWrapper;
