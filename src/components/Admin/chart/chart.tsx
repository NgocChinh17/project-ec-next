"use client"

import React from "react"
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LikeOutlined,
} from "@ant-design/icons"
import { Col, Row, Statistic, Tooltip } from "antd"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import "../../../styles/stylesChart.css"

const Chart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  return (
    <>
      <div>
        <p style={{ marginBottom: 20, fontSize: 25, fontWeight: "500" }}>
          Dashboard
        </p>
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <Statistic
              style={{ background: "#FFF5EE", padding: 10, borderRadius: 10 }}
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Col>

          <Col span={4}>
            <Statistic
              style={{ background: "#FFF5EE", padding: 10, borderRadius: 10 }}
              title="Unmerged"
              value={93}
              suffix="/ 100"
            />
          </Col>

          <Col span={4}>
            <Statistic
              title="Active Users"
              value={112893}
              style={{ background: "#FFF5EE", padding: 10, borderRadius: 10 }}
            />
          </Col>

          <Col span={6}>
            <Statistic
              style={{ background: "#FFF5EE", padding: 10, borderRadius: 10 }}
              title="Account Balance (CNY)"
              value={112893}
              precision={2}
            />
          </Col>

          <Col span={4}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
              style={{ background: "#FFF5EE", padding: 10, borderRadius: 10 }}
            />
          </Col>

          <Col span={4}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
              style={{ background: "#FFF5EE", padding: 10, borderRadius: 10 }}
            />
          </Col>
        </Row>

        <div style={{ marginTop: 16 }}>
          <AreaChart width={1000} height={250} data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </>
  )
}

export default Chart
