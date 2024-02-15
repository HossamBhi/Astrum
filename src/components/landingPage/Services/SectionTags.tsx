import React from "react";

const SectionTags = () => {
  return (
    <div className="flex justify-center">
      <img
        src={`${process.env.PUBLIC_URL}/imgs/home/tags.png`}
        className="my-[2vw] h-[2.5vw]"
        alt="tags"
      />
    </div>
  );
};

export default SectionTags;
