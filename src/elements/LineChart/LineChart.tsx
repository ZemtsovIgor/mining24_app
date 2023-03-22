import React from 'react'
import { ResponsiveContainer, XAxis, YAxis, AreaChart, Area } from 'recharts'
import { LineChartStyles } from "./LineChart.Styles";

export type LineChartProps = {
  data: any[]
} & React.HTMLAttributes<HTMLDivElement>

const LineChart = ({ data }: LineChartProps) => {
  return (
    <LineChartStyles>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          width={300}
          height={308}
          margin={{
            top: 5,
            right: 15,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="time"
            axisLine={true}
            tickLine={true}
            tickFormatter={(time) => new Date(time).toLocaleDateString('en', { month: 'short' })}
            minTickGap={10}
          />
          <YAxis
            dataKey="value"
            tickCount={6}
            scale="linear"
            axisLine={{stroke: '#5F698D', width: 4}}
            tickLine={true}
            fontSize="12px"
            tickFormatter={(val) => val}
            orientation="right"
            tick={{ dx: 10, fill: '#5F698D', width: 4 }}
          />
          <Area dataKey="value" type="monotone" stroke='#58E664' fill="url(#gradient)" strokeWidth={4} />
        </AreaChart>
      </ResponsiveContainer>
    </LineChartStyles>
  )
}

export default LineChart;
