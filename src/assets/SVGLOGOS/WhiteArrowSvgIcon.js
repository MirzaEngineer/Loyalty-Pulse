import * as React from "react"
import Svg, { Path } from "react-native-svg"
const WhiteArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M1.058.558a.625.625 0 0 1 .884 0l4.41 4.41.021.021c.12.12.252.252.347.377.112.146.232.356.232.634s-.12.488-.232.634c-.095.125-.226.256-.347.377l-.02.02-4.411 4.41a.625.625 0 1 1-.884-.883l4.41-4.41L5.616 6c-.04-.042-.088-.089-.146-.147l-4.41-4.411a.625.625 0 0 1 0-.884Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default WhiteArrowIcon
