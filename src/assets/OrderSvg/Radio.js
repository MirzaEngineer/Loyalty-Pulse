import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const RadioIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect
      width={19}
      height={19}
      x={2.5}
      y={2.5}
      fill="#fff"
      stroke="#ADB5BD"
      rx={9.5}
    />
  </Svg>
)
export default RadioIcon
