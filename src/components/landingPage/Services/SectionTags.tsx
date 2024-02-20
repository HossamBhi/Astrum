import React from "react";
import SixK from "../../../assets/SixK";

const SectionTags = () => {
  return (
    <div className="flex justify-center items-end my-[2vw]">
      {/* <img
        src={`${process.env.PUBLIC_URL}/imgs/6K.svg`}
        className="my-[2vw] h-[1.75vw]"
        alt="tags"
      /> */}
      <SixK height={'1.25vw'} width={'auto'}/>
    </div>
  );
};

export default SectionTags;
