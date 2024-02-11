import { HTMLProps } from "react";
import DashHeader from "./DashHeader";

const DashWrapper = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props}>
      <DashHeader />
      {children}
    </div>
  );
};

export default DashWrapper;
