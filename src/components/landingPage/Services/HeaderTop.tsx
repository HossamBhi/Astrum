import { HTMLProps } from "react";

const HeaderTop = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2 className="pb-[3.75vw] text-center text-[3.8vw] codecPro-ExtraBold" {...props}>
      {children}
    </h2>
  );
};
export default HeaderTop;
