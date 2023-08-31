import { Spin } from 'antd'
import React from 'react'
import styles from "./page.module.css";
function Loading() {
  return (
    <>
   <Spin   style={{  position: "absolute",
  top: "50%",
  left: " 50%",
  transform: "translate(-50%, -50%)"}} size="large" />
    </>
  )
}

export default Loading
