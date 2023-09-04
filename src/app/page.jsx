"use client";

import {Suspense, useState} from "react";
import {Button, Form, Input, Table} from "antd";
import {Grid} from "@mui/material";
//component
import styles from "./page.module.css";
import AddModal from "@/components/Modal";
import {Loading} from "./loading";
import ListLogic from "./Listlogic";
import {UserActions} from "@/redux/actions/user";
import EnhancedTable from "@/components/Table";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

export default function UserList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const {
    User,
    handleChange,
    handleAddUser,
    HandleCloseAddModal,
    OpenAddModal,
    HandleOpenAddModal,
    classes,
    user,
    data,
    dispatch,
  } = ListLogic();
  const [Id, setId] = useState(null);
  const start = () => {
    dispatch(UserActions.getDeleteUser(Id));
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys.toString());
    setId(newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const columns = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "first_name",
      dataIndex: "first_name",
    },
  ];

  let total = user.total;
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <Button type="primary" className={classes.btn} onClick={HandleOpenAddModal}>
                add User
              </Button>
              <Button
                type="primary"
                className={classes.btn}
                onClick={start}
                disabled={!hasSelected}
              >
                delete
              </Button>{" "}
              <Table
                rowSelection={rowSelection}
                dataSource={data.users}
                columns={columns}
                pagination={{
                  pageSize: 10,
                  total: total,
                  onChange: (p1, p2) => dispatch(UserActions.getAllUser(p1, p2)),
                  // onChange: (p1, p2) => console.log(p1, p2),
                }}
                rowKey="id"
                rowClassName="editable-row"
              />
              {/* <EnhancedTable /> */}
            </div>
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
}
