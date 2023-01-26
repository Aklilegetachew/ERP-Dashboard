import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../../components/dashboard/budget";
import { LatestOrders } from "../../components/dashboard/latest-orders";
import { LatestProducts } from "../../components/dashboard/latest-products";
import { Sales } from "../../components/dashboard/sales";
import { TasksProgress } from "../../components/dashboard/tasks-progress";
import { TotalCustomers } from "../../components/dashboard/total-customers";
import { Expense } from "../../components/dashboard/total-profit";
import { TrafficByDevice } from "../../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../../components/dashboard-layout";
import React, { useEffect, useState } from "react";
import { useUser } from "../../lib/UserContext";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import Link from "next/link";

const Dashboard = () => {
  const { user, setUser } = useUser();
  const token = Cookies.get("token");
  // const [user, setUser] = useState({});

  useEffect(() => {
    jwt.verify(token, "PROPLAST", (err, decoded) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decoded);
        Cookies.set("user", JSON.stringify(decoded));
        // setUser(decoded);
      }
    });
  }, []);
  // setRole(user.role)
  // console.log(user, "sdfSdfsdfsdf");
  // console.log(user, "dashboard");

  return (
    <>
      <Head>
        <title>Dashboard | Proplast</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Link href="/dashboard/profit">
                <Budget />
              </Link>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Link href="/dashboard/uncollected">
                <TotalCustomers />
              </Link>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Link href="/dashboard/Expenses">
                <Expense sx={{ height: "100%" }} />
              </Link>
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByDevice sx={{ height: "100%" }} />
            </Grid>
            {/* <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TasksProgress />
            </Grid> */}
            {/* <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <LatestProducts sx={{ height: '100%' }} />
            </Grid> */}
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
