import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Card,
  Typography,
} from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import Table from "../../components/Table";
import ToolBar from "../../components/ToolBar";
import FAxios from '../../components/financeAxios'

const AccountPayable = () => {
  const [data, setData] = useState([]);
  const columns = [
    { title: "Payable Name", field: "payable_name" },
    { title: "Account Number", field: "payable_accountnum" },
    { title: "Value", field: "payable_value" },
    { title: "Person", field: "payable_person" },
    { title: "First Date", field: "payable_firstdate" },
    { title: "Last Date", field: "payable_lastdate" },
    { title: "Status", field: "payable_status" },
  ];
  useEffect(() => {

    FAxios.get('/showaccountpayable')
    .then((res) =>{
      setData(res.data);
      console.log(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })

  }, []);

  return (
    <>
      <Head>
        <title>Account Payable | Proplast</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="ml">
          {/* <ToolBar title="customer" href="/sales/Customers/addCustomers" /> */}
          <Card maxWidth="lg">
            <Table
              title="Account Payable"
              data={data}
              columns={columns}
            //   options={{
            //     actionsColumnIndex: -1,
            //     selection: true,
            //   }}
            //   actions={[
            //     {
            //       tooltip: "Remove All Selected Users",
            //       icon: "delete",
            //       onClick: (evt, data) => alert("You want to delete " + data.length + " rows"),
            //     },
            //   ]}
            />
          </Card>
        </Container>
      </Box>
    </>
  );
};

AccountPayable.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AccountPayable;
