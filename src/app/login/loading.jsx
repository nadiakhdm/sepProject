import {Spin} from "antd";

import styles from "./page.module.css";
function Loading() {
  return (
    <>
      <Spin size="large" className={styles.Spin} />
    </>
  );
}

export default Loading;
