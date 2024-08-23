import { Card, Grid } from "@mui/material"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import React, { SetStateAction, useState } from "react";
import { Service } from "../../type/Service";

interface ServiceCardProps{
    index: number,
    subIndex?: number,
    service: Service,
    setServices: React.Dispatch<SetStateAction<Service[]>>
    layer: number
}

export const ServiceCard: React.FC<ServiceCardProps> = React.memo(({service, setServices, layer}) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleRemove = () => {
        // setService(null);
    };

    return <>
        <Card>
            <Grid container alignItems={'center'} justifyContent={'space-between'} style={{color: '#616060D1', height:50, paddingLeft: 22, paddingRight: 12}}>
                <Grid item>
                    {service.name}
                </Grid>
                <Grid item>
                    <Grid container justifyContent={'space-between'} columnSpacing={1}>
                        <Grid item>
                            <EditOutlinedIcon></EditOutlinedIcon>
                        </Grid>
                        <Grid item>
                            <div onClick={handleRemove}><PowerSettingsNewIcon></PowerSettingsNewIcon></div>
                        </Grid>
                        {layer == 0 && <Grid item>
                            <div onClick={handleOpen}>
                                {
                                    open ? <ArrowDropDownOutlinedIcon/> : <ArrowDropUpOutlinedIcon/>
                                }
                            </div>
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </Card>
        <div style={{marginLeft: 22}}>{(layer == 0 && open) && service.subServices?.map(
            (s, i) => {
                return <ServiceCard service={s} layer={1} key={s.id}></ServiceCard>
            } 
        )
        }</div>
    </>
    }, (prevProps, nextProps) => {
        return prevProps.name === nextProps.name;
});