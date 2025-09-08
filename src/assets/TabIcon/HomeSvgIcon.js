import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeWidth={1.8}
      d="M14 16c-.8.623-1.85 1-3 1s-2.2-.377-3-1"
    />
    <Path
      stroke="url(#b)"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M1.352 12.214C.999 9.916.822 8.768 1.256 7.75 1.691 6.73 2.654 6.035 4.581 4.64l1.44-1.04C8.42 1.866 9.617 1 11.001 1c1.382 0 2.581.866 4.978 2.6l1.44 1.04c1.927 1.394 2.89 2.09 3.325 3.109.434 1.018.258 2.166-.095 4.464l-.301 1.959c-.5 3.256-.75 4.884-1.919 5.856-1.168.971-2.875.971-6.29.971H9.861c-3.414 0-5.122 0-6.29-.971-1.168-.972-1.418-2.6-1.918-5.856l-.301-1.96Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11}
        x2={11}
        y1={16}
        y2={17}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E85D43" />
        <Stop offset={1} stopColor="#C43400" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={11}
        x2={11}
        y1={1}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E85D43" />
        <Stop offset={1} stopColor="#C43400" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default HomeIcon
