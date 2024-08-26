import { Grid } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useContext } from "react";
import { ServicesModalContext } from "../../context/ServicesModalContext";

export const AddService = () => {


    return <div>
        <Grid container alignItems={'center'} style={{color: '#31C462', height:50, cursor: 'pointer'}}>
            <Grid item>
                <AddIcon style={{fill: '#31C462'}}></AddIcon>
            </Grid>
            <Grid item>
                Agregar categoría / servicio
            </Grid>
    </Grid>
    </div>
}