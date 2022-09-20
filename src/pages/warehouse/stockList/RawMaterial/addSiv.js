import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  Box,
  Button,
  Card,
  InputLabel,
  ButtonBox,
  Container,
  Typography,
  Grid,
  DatePicker,
  Alert
} from "@mui/material";
import Head from "next/head";
import { DashboardLayout } from "src/components/dashboard-layout";
import Link from "@mui/material/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useForm } from "react-hook-form";
import Router from "next/router";

const AddSiv = () => {
  const [status, setStatus] = React.useState("");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = React.useState([]);

  const [notify, setNotify] = React.useState("");

  const submitAllForms=()=>{
    console.log(data);
    setNotify("success")
  }

  const newUser = (user) => {
    const newDatas = [user, ...data];
    setData(newDatas);
    reset();
    setNotify("info");
    // fetch("http://versavvy.com:49000/addnewrawmaterials", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user)
    // });
    // Router.push('/warehouse/stockList/Accessories')
  };

  return (
    <>
      <Head>
        <title>Raw Material | Add SIV</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Box sx={{position: 'fixed', bottom: '5%',right: '5%', zIndex: '100000', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
              {notify ? (
                notify == 'success' ? <Alert variant="filled" severity="success" color="success">Saved Successfully</Alert> : <Alert variant="filled" severity="info">Added Successfully</Alert>
              ) : null }
            </Box>
        <Box
          sx={{
            width: "100%",
            // height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginLeft: "-80%", marginBottom: "2%" }}>
            <Link
              href="/warehouse/stockList/RawMaterial"
              color="black"
              underline="none"
              variant="subtitle2"
              sx={{ cursor: "pointer" }}
            >
              <ArrowBackIcon /> Raw Material
            </Link>
          </Box>
          <Card sx={{ width: "90%", padding: "2%" }}>
            {/* <form onSubmit={handleSubmit(newUser)}>
              <input type="text" name="name" {...register("name")} />
              <input type="text" password="email" {...register("email")} />
              <input type="submit" />
            </form> */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <form onSubmit={handleSubmit(newUser)}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="h6">Add Raw Material SIV</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="raw_name "
                      label="Name"
                      type="text"
                      value={data.name}
                      fullWidth
                      {...register("raw_name")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="raw_quantity"
                      label="Quantity"
                      type="text"
                      fullWidth
                      {...register("raw_quantity")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="raw_description"
                      label="Description"
                      type="text"
                      fullWidth
                      {...register("raw_description")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="raw_materialcode"
                      label="MaterialCode"
                      type="text"
                      fullWidth
                      {...register("raw_materialcode")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="raw_spec"
                      label="Specification"
                      type="text"
                      fullWidth
                      {...register("raw_spec")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="raw_materialunit"
                      label="Material Unit"
                      type="text"
                      fullWidth
                      {...register("raw_materialunit")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="raw_value"
                      label="Value"
                      type="text"
                      fullWidth
                      {...register("raw_value")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="raw_referncenum"
                      label="Reference Number"
                      type="text"
                      fullWidth
                      {...register("raw_referncenum")}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      name="raw_date"
                      label="Date"
                      type="text"
                      fullWidth
                      {...register("raw_date")}
                    />

                    {/* <DesktopDatePicker
                    sx={{ maxWidth: 500 }}
                    name="raw_date"
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={"2014-08-18T21:11:54"}
                    renderInput={(params) => <TextField {...params} {...register("raw_date")}/>}
                  /> */}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      name="raw_remark"
                      label="Remark"
                      type="text"
                      fullWidth
                      {...register("raw_remark")}
                    />
                  </Grid>
                  <Grid item lg={8}>
                    <Button type="submit" sx={{ marginRight: "2rem" }} variant="contained">
                      Add
                    </Button>
                    <Button variant="outlined">Clear</Button>
                  </Grid>
                </Grid>
              </form>
            </LocalizationProvider>
          </Card>
          <Card sx={{width: '90%', m: 2, p: "2%"}}>
            <Box>
              <Button onClick={submitAllForms} sx={{ marginRight: "2rem" }} variant="contained">
                Save
              </Button>
              <Button variant="outlined">Cancel</Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

AddSiv.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddSiv;
