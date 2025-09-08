import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#676879"
      fillRule="evenodd"
      d="M5.354.646a.5.5 0 0 1 0 .708L1.825 4.882 1.708 5l.117.118 3.529 3.528a.5.5 0 1 1-.707.708L1.118 5.825l-.016-.016C1.005 5.712.9 5.608.824 5.507A.826.826 0 0 1 .638 5c0-.222.097-.39.186-.507.076-.1.181-.205.278-.302l.016-.016L4.647.646a.5.5 0 0 1 .707 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default BackArrowIcon
