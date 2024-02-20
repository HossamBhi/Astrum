import React from "react";

const FourK = ({
  width = 657.067,
  height,
}: {
  width?: string | number;
  height?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    // height={height}
    viewBox="0 0 386 59"
  >
    <g
      id="Group_1589"
      data-name="Group 1589"
      transform="translate(-2658 -17887)"
    >
      <rect
        id="Rectangle_177"
        data-name="Rectangle 177"
        width="83"
        height="49"
        rx="10"
        transform="translate(2658 17892)"
        fill="none"
      />
      <rect
        id="Rectangle_178"
        data-name="Rectangle 178"
        width="83"
        height="49"
        rx="10"
        transform="translate(2759 17892)"
        fill="#fff"
      />
      <g
        id="Rectangle_179"
        data-name="Rectangle 179"
        transform="translate(2860 17892)"
        fill="none"
        stroke="#fff"
        stroke-width="1"
      >
        <rect width="83" height="49" rx="10" stroke="none" />
        <rect x="0.5" y="0.5" width="82" height="48" rx="9.5" fill="none" />
      </g>
      <g
        id="Rectangle_180"
        data-name="Rectangle 180"
        transform="translate(2961 17892)"
        fill="none"
        stroke="#fff"
        stroke-width="1"
      >
        <rect width="83" height="49" rx="10" stroke="none" />
        <rect x="0.5" y="0.5" width="82" height="48" rx="9.5" fill="none" />
      </g>
      <text
        id="_4K"
        data-name="4K"
        transform="translate(2770 17931)"
        font-size="42"
        font-family="CodecPro-Bold, Codec Pro"
      >
        <tspan x="0" y="0">
          4K
        </tspan>
      </text>
      <text
        id="CC"
        transform="translate(2871 17931)"
        fill="#fff"
        font-size="42"
        font-family="CodecPro-Bold, Codec Pro"
        font-weight="700"
      >
        <tspan x="0" y="0">
          CC
        </tspan>
      </text>
      <text
        id="AD"
        transform="translate(2973 17931)"
        fill="#fff"
        font-size="42"
        font-family="CodecPro-Bold, Codec Pro"
        font-weight="700"
      >
        <tspan x="0" y="0">
          AD
        </tspan>
      </text>
    </g>
  </svg>
);

export default FourK;
