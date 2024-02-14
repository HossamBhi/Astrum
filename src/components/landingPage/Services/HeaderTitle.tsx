import { HTMLProps } from "react";

const HeaderTitle = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h3 className="leading-tight xl:text-[35px] 2xl:text-[30px] 3xl:text-[40px] 4xl:text-[67px]" {...props}>
      {children}
      {/* محتــــوى حصــري <p className="text-[#4D17CE]">Switch على</p> */}
    </h3>
  );
};
export default HeaderTitle;
