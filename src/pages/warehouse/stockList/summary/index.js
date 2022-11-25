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
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { DashboardLayout } from "../../../../components/dashboard-layout";
import Table from "../../../../components/Table";
import ToolBar from "../../../../components/ToolBar";
import waxios from "../../../../components/wareHouseAxios";

const Summary = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState('RAW')
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const columns = [
    { title: "Material Type", field: "material_type" },
    { title: "Date", field: "summery_date" },
    { title: "Stock At Hand", field: "stockat_handion" },
    { title: "Stock Recieved", field: "stock_recieved" },
    { title: "Stock Issued", field: "stock_issued" },
    { title: "Department Issued", field: "department_issued" },
    { title: "Stock At End", field: "stockat_end" },

  ];
  const req = {
    materialType : type
  }
  useEffect(() => {
    waxios
      .post("/showAllByType",req)
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((response) => {
        console.log(response);
      });
  }, [type]);
  return (
    <>
      <Head>
        <title>Summary</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="ml">
          <Grid Container spacing={3}>
            <Grid item xg={4} lg={4} sm={12} sx={{mb:3}}>
              <FormControl >
                <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={'RAW'}>Raw Material</MenuItem>
                  <MenuItem value={'ACCS'}>Accessories</MenuItem>
                  <MenuItem value={'FIN'}>Finished Goods</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xg={12} lg={12} sm={12}>
              <Card maxWidth="lg">
                <Table title="Summary Report" data={data} columns={columns} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Summary.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Summary;
