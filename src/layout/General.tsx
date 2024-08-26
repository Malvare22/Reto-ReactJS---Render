import { Grid } from "@mui/material";
import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import { Outlet } from 'react-router-dom';
import Breadcrumb from "../pages/Components/Breadcrumb";

interface LayoutGeneralProps {
    children: React.ReactNode;
  }
  
export default function LayoutGeneral() {
    return <>
        <Header></Header>
        <Grid container style={{marginTop: 10}}>
            <Grid item xs={2} style={{height: '100vh'}}>
                <Aside></Aside>
            </Grid>
            <Grid item xs={10}>
                <div style={{padding: 20}}>
                    <Grid item><Breadcrumb/></Grid>
                    <div style={{padding: 26}}><Outlet/></div>
                </div>
            </Grid>
        </Grid>
</>;
}