import { HTMLProps } from "react";

const Container = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  return <div {...props}>{children}</div>;
};

export default Container;
