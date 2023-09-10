"use client";

import {Suspense} from "react";
import {Button, Input, Table} from "antd";
import {Grid} from "@mui/material";
//component
import styles from "./page.module.css";
import AddModal from "@/components/Modal";
import Loading from "./loading";
import ListLogic from "./Listlogic";
import {UserActions} from "@/redux/actions/user";
import ComponentWrapper from "../components/componentWraper";

function UserList() {
  const {
    User,
    user,
    hasSelected,
    rowSelection,
    handleSelectUser,
    handleChange,
    handleAddUser,
    HandleCloseAddModal,
    OpenAddModal,
    HandleOpenAddModal,
    data,
    classes,
    column,
    dispatch,
  } = ListLogic();

  let total = user.total;
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        {user.token && user.token !== null && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div>
                <Button type="primary" className={classes.btn} onClick={HandleOpenAddModal}>
                  add User
                </Button>
                <Button
                  type="primary"
                  className={classes.btn}
                  onClick={handleSelectUser}
                  disabled={!hasSelected}
                >
                  delete
                </Button>{" "}
                <Table
                  rowSelection={rowSelection}
                  dataSource={data.users}
                  columns={column}
                  pagination={{
                    pageSize: 10,
                    total: total,
                    onChange: (p1, p2) => dispatch(UserActions.getAllUser(p1, p2)),
                  }}
                  rowKey="id"
                  rowClassName="editable-row"
                />
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
        )}
      </Suspense>
    </main>
  );
}
export default ComponentWrapper(UserList);
