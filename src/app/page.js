"use client";
import {Button, Col, Row, Table} from "antd";
import styles from "./page.module.css";
import {useState} from "react";
import {Grid} from "@mui/material";
import AddModal from "@/components/Modal";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default function Home() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [OpenAddModal, setOpenAddModal] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const HandleOpenAddModal = () => {
    setOpenAddModal(!OpenAddModal);
  };
  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
              remove
            </Button>
            <Button type="primary" onClick={HandleOpenAddModal} loading={loading}>
              add
            </Button>
            <span
              style={{
                marginLeft: 8,
              }}
            >
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </Grid>

        <AddModal
          title="sdsdsd"
          open={OpenAddModal}
          // onOk={value === 'Folder' ? handleSaveFolder : handleSaveFile}
          // onCancel={HandleCloseAddFileModal}
          okText="dfdfdf"
          cancelText="ds"
        >
          sdsdsd
        </AddModal>
      </Grid>
    </main>
  );
}
