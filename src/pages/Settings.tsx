import { Container, Grid } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { AddService, Service } from "./Components/Service";

export default function Settings(){
    return<Container>
        <Grid container justifyContent={'space-between'}>
            <Grid item style={{color: '#000000', fontSize: '18px', fontWeight: 'bold'}}>EDICIÓN DE CATÁLOGO</Grid>
            <Grid item>
                <Grid container style={{color: '#000000', fontSize: '18px', fontWeight: 'bold'}}>
                    <Grid item>
                        <SaveOutlinedIcon style={{fill: '#595959'}}></SaveOutlinedIcon>
                    </Grid>
                    <Grid item>
                        <AssignmentReturnIcon style={{fill: '#0047BA'}}></AssignmentReturnIcon>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <ServicesContainer></ServicesContainer>
    </Container>;
}

function ServicesContainer(){
    return<div style={{padding: 12, border: 'solid 1px black'}}>
        <Grid container alignContent={'center'} style={{backgroundColor: '#0047BA', color: '#FFFFFF', height:50, paddingLeft: 22}}>
            <div>
                Catálogo de Servicios
            </div>
        </Grid>
        <AddService></AddService>
        <Grid item>
            <Service></Service>
        </Grid>
    </div>;
}

