import { Spin } from 'antd'
import React from 'react'

function Loading() {
  return (
    <div>
  <Spin   style={{  position: "absolute",
  top: "50%",
  left: " 50%",
  transform: "translate(-50%, -50%)"}} size="large" />
    </div>
  )
}

export default Loading
