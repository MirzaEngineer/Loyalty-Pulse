import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BlueLockIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#3469ED"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 11V9.667"
    />
    <Path
      stroke="#3469ED"
      strokeWidth={1.5}
      d="M1.845 12.563c.15 1.114 1.073 1.986 2.195 2.038.944.043 1.904.066 2.96.066 1.057 0 2.016-.023 2.96-.066 1.123-.052 2.045-.924 2.195-2.038.098-.727.178-1.471.178-2.23 0-.758-.08-1.503-.178-2.23-.15-1.113-1.072-1.985-2.195-2.037A63.629 63.629 0 0 0 7 6a63.63 63.63 0 0 0-2.96.066c-1.123.052-2.045.924-2.195 2.038-.098.726-.178 1.47-.178 2.23 0 .758.08 1.502.178 2.23Z"
    />
    <Path
      stroke="#3469ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6V4.333a3 3 0 1 1 6 0V6"
    />
  </Svg>
)
export default BlueLockIcon
