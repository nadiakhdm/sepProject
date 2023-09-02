import React from "react";
import {Modal} from "antd";
function AddModal(props) {
  return (
    <>
      <Modal
        title={props.title}
        open={props.open}
        onOk={props.onOk}
        onCancel={props.onCancel}
        okText={props.okText}
        cancelText={props.cancelText}
      >
        {props.children}
      </Modal>
    </>
  );
}

export default AddModal;
