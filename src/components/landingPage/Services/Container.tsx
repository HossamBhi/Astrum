import { HTMLProps } from "react";

const Container = ({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`px-[7.2vw] ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
