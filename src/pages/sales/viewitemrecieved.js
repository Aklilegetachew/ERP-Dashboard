import React,{useState,useEffect} from 'react'
import Head from 'next/head';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Card,
  Typography
} from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import Table from '../../components/Table'
import ToolBar from '../../components/ToolBar'

const ViewItemRecieved = () => {
  const [data, setData] = useState([]);
  const columns = [
    { title: "Name", field: "finished_name" },
    { title: "Quantity", field: "finished_quantity" },
    { title: "Description", field: "finished_description" },
    { title: "Material Code", field: "finished_materialcode" },
    { title: "Specification", field: "finished_spec" },
    { title: "Material Unit", field: "finished_materialunit" },
    { title: "Value", field: "finished_value" },
    { title: "Reference Number", field: "finished_referncenum" },
    { title: "Date", field: "finished_date" },
    { title: "Remark", field: "finished_remark" },
  ];
  useEffect(() => {
    fetch("http://localhost:59000/finishedMaterial")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);
  return (
    <>
      <Head>
        <title>
        View Item Recieved
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="ml">
        {/* <ToolBar title="Recieving" href="/procurment/paymentrequest/add" /> */}

          {/* <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Raw Material stockList
          </Typography> */}
          <Card maxWidth="lg">
        
        <Table 
          title='View Item Recieved' 
          data={data} 
          columns={columns}
          // actions={[
          //   rowData => ({
          //     icon: () => <NextLink href={`/procurment/purchaserequest/rfq`}><NavigateNextIcon /></NextLink>,
          //     tooltip: 'Edit ',
          //     onClick:()=> (rowData)
          //   })
          // ]}
          />

        {/* <Typography sx={{ mb: 3 }} variant="h4">
          Supplier
        </Typography> */}
      </Card>
        </Container>
      </Box>
    </>
  )
};

ViewItemRecieved.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default ViewItemRecieved;
