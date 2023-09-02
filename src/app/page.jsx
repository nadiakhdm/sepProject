"use client";

import {Suspense} from "react";
import {Button, Col, Input, Row, Table} from "antd";
import {Grid} from "@mui/material";
//component
import styles from "./page.module.css";
import AddModal from "@/components/Modal";
import {Loading} from "./loading";
import ListLogic from "./Listlogic";

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
export default function UserList() {
  const {
    User,
    loading,
    router,
    selectedRowKeys,
    handleChange,
    handleAddUser,
    HandleCloseAddModal,
    OpenAddModal,
    HandleOpenAddModal,
    start,
    onSelectChange,
    rowSelection,
    hasSelected,
    classes,
  } = ListLogic();

  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <Button
                type="primary"
                className={classes.btn}
                onClick={start}
                disabled={!hasSelected}
                loading={loading}
              >
                Delete
              </Button>
              <Button type="primary" className={classes.btn} onClick={HandleOpenAddModal}>
                add User
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
            title="Add user"
            open={OpenAddModal}
            onOk={handleAddUser}
            onCancel={HandleCloseAddModal}
            okText="Add"
            cancelText="Cancel"
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Input value={User.name} name="name" placeholder="name" onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <Input value={User.job} name="job" placeholder="job" onChange={handleChange} />
              </Grid>
            </Grid>
          </AddModal>
        </Grid>
      </Suspense>
    </main>
  );
  ر;
}
