import * as React from "react"
import Svg, { Path } from "react-native-svg"
const EquilIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      stroke="#18191B"
      strokeLinecap="round"
      d="M1.167 1.333h10.666M1.167 6.667h10.666"
    />
  </Svg>
)
export default EquilIcon
