import { HTMLProps } from "react";

const HeaderTop = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2
      className="4xl:text-[100px] pb-[55px] text-center text-[44px] font-extrabold 3xl:text-[60px]"
      {...props}
    >
      {children}
      {/* محتــــوى حصــري <p className="text-[#4D17CE]">Switch على</p> */}
    </h2>
  );
};
export default HeaderTop;
