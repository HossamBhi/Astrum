import { HTMLProps } from "react";

const Tag = ({ children, ...props }: HTMLProps<HTMLParagraphElement>) => {
  return (
    <p className="text-green-600" {...props}>
      {children}
    </p>
  );
};

export default Tag;
