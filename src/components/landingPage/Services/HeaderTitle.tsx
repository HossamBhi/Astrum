import { HTMLProps } from "react";

const HeaderTitle = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h3 className="leading-tight text-[2.25vw]" {...props}>
      {children}
      {/* محتــــوى حصــري <p className="text-[#4D17CE]">Switch على</p> */}
    </h3>
  );
};
export default HeaderTitle;
