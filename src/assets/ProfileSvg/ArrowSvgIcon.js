import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={9}
    fill="none"
    {...props}
  >
    <Path
      fill="#676879"
      fillRule="evenodd"
      d="M.646.146a.5.5 0 0 1 .708 0l3.528 3.529.016.016c.097.097.202.201.278.302.09.117.186.285.186.507 0 .222-.096.39-.186.507-.076.1-.18.205-.278.302l-.016.016-3.528 3.529a.5.5 0 1 1-.708-.708l3.529-3.528.117-.118a10.83 10.83 0 0 0-.117-.118L.646.854a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ArrowIcon
