import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 1.333v13.334M14.667 8H1.333"
    />
  </Svg>
)
export default PlusIcon
