import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DowenArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      fill="#676879"
      fillRule="evenodd"
      d="m7 5.938-.177-.175L1.53.47A.75.75 0 1 0 .47 1.53l5.293 5.293.024.025c.145.145.302.302.452.416.176.134.428.279.761.279s.585-.145.761-.279c.15-.114.307-.271.452-.416l.024-.025L13.53 1.53A.75.75 0 0 0 12.47.47L7.177 5.763 7 5.938Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default DowenArrowIcon
