import { Card, Grid } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { useState } from "react";

export const Service = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return <>
        <Card>
            <Grid container alignItems={'center'} justifyContent={'space-between'} style={{color: '#616060D1', height:50, paddingLeft: 22, paddingRight: 12}}>
                <Grid item>
                    Nombre de la categoría - Servicio
                </Grid>
                <Grid item>
                    <Grid container justifyContent={'space-between'} columnSpacing={1}>
                        <Grid item>
                            <EditOutlinedIcon></EditOutlinedIcon>
                        </Grid>
                        <Grid item>
                            <PowerSettingsNewIcon></PowerSettingsNewIcon>
                        </Grid>
                        <Grid item>
                            <div onClick={handleOpen}>
                                {
                                    open ? <ArrowDropDownOutlinedIcon/> : <ArrowDropUpOutlinedIcon/>
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    </>
}

export const AddService = () => {
    return <Grid container alignItems={'center'} style={{color: '#31C462', height:50, paddingLeft: 22, cursor: 'pointer'}}>
            <Grid item>
                <AddIcon style={{fill: '#31C462'}}></AddIcon>
            </Grid>
            <Grid item>
                Agregar categoría / servicio
            </Grid>
            {/* <ServicesModal></ServicesModal> */}
    </Grid>
}