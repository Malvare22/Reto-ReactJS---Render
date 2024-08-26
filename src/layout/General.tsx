import { Grid } from "@mui/material";
import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import { Outlet } from 'react-router-dom';

interface LayoutGeneralProps {
    children: React.ReactNode;
  }
  
export default function LayoutGeneral() {
    return <>
        <Header></Header>
        <Grid container>
            <Grid item xs={2}>
            <Aside></Aside>
            </Grid>
            <Grid item xs={10}>
                <Outlet/>
            </Grid>
        </Grid>
</>;
}