import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Text as SvgText, Line } from 'react-native-svg';

const data = [50, 80, 40, 90, 30];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const chartHeight = 140;
const chartWidth = 250;
const paddingLeft = 40; // space for Y-axis labels
const paddingBottom = 20; // space for X-axis labels

const SpendingChart = () => {
  const step = (chartWidth - paddingLeft) / (data.length - 1);
  const maxValue = 100; // For scaling

  const scaleY = value =>
    chartHeight - paddingBottom - (value / maxValue) * (chartHeight - paddingBottom - 10);

  const getSmoothPath = () => {
    let d = `M ${paddingLeft} ${scaleY(data[0])}`;
    for (let i = 0; i < data.length - 1; i++) {
      const x1 = paddingLeft + i * step;
      const y1 = scaleY(data[i]);
      const x2 = paddingLeft + (i + 1) * step;
      const y2 = scaleY(data[i + 1]);
      const cx = (x1 + x2) / 2;
      const cy = (y1 + y2) / 2;
      d += ` Q ${x1} ${y1}, ${cx} ${cy} T ${x2} ${y2}`;
    }
    return d;
  };

  return (
    <View style={styles.container}>
      <Svg height={chartHeight} width={chartWidth}>
        {/* Y-axis labels */}
        <SvgText x={5} y={scaleY(100)} fontSize="10" fill="#5C6670">500k</SvgText>
        <SvgText x={5} y={scaleY(50)} fontSize="10" fill="#5C6670">50k</SvgText>
        <SvgText x={5} y={scaleY(0)} fontSize="10" fill="#5C6670">0</SvgText>

        {/* Horizontal grid lines */}
        <Line x1={paddingLeft} y1={scaleY(100)} x2={chartWidth} y2={scaleY(100)} stroke="#E0E0E0" strokeWidth="1" />
        <Line x1={paddingLeft} y1={scaleY(50)} x2={chartWidth} y2={scaleY(50)} stroke="#E0E0E0" strokeWidth="1" />
        <Line x1={paddingLeft} y1={scaleY(0)} x2={chartWidth} y2={scaleY(0)} stroke="#E0E0E0" strokeWidth="1" />

        {/* Smooth line path */}
        <Path d={getSmoothPath()} fill="none" stroke="#C43400" strokeWidth="2" />

        {/* Points only (no numbers) */}
        {data.map((value, index) => {
          const x = paddingLeft + index * step;
          const y = scaleY(value);
          return (
            <Circle key={`point-${index}`} cx={x} cy={y} r="3" fill="#C43400" />
          );
        })}

        {/* X-axis labels */}
        {days.map((day, index) => {
          const x = paddingLeft + index * step;
          return (
            <SvgText
              key={`day-${index}`}
              x={x}
              y={chartHeight - 5}
              fontSize="10"
              fill="#5C6670"
              textAnchor="middle"
            >
              {day}
            </SvgText>
          );
        })}
      </Svg>
    </View>
  );
};

export default SpendingChart;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});





















// // SpendingChart.jsx
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
// import { G, Line, Rect, Text as SVGText } from 'react-native-svg';

// const SpendingChart = () => {
//   const data = [50, 10, 40, 95, 85, 35, 53];
//   const fill = '#FFDAC9';

//   return (
//     <View style={styles.chartWrapper}>
//       <BarChart
//         style={{ height: 100 }}
//         data={data}
//         svg={{ fill }}
//         spacingInner={0.3}
//         contentInset={{ top: 10, bottom: 10 }}
//         gridMin={0}
//       >
//         <Grid direction={Grid.Direction.HORIZONTAL} />
//       </BarChart>
//       <XAxis
//         style={{ marginTop: 8 }}
//         data={data}
//         formatLabel={(value, index) => ['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
//         contentInset={{ left: 10, right: 10 }}
//         svg={{ fontSize: 10, fill: '#A1A1A1' }}
//       />
//     </View>
//   );
// };

// export default SpendingChart;

// const styles = StyleSheet.create({
//   chartWrapper: {
//     padding: 16,
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     shadowColor: '#0D0A2C',
//     shadowOpacity: 0.08,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 3,
//   },
// });
