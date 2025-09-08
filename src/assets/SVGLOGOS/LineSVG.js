import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LineSvgLogo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E85D43"
      strokeDasharray="4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1v24"
    />
  </Svg>
)
export default LineSvgLogo
