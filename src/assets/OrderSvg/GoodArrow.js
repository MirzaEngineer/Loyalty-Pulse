import * as React from "react"
import Svg, { Path } from "react-native-svg"
const GoodArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2AC87C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m22.479 12.65-7.7 7.7-4.257-4.259"
    />
  </Svg>
)
export default GoodArrow
