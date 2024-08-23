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
    services: Service[],
    setServices: React.Dispatch<SetStateAction<Service[]>>
    layer: number
}

export const ServiceCard: React.FC<ServiceCardProps> = ({services, setServices, layer, index, subIndex}) => {

    const [open, setOpen] = useState(false);

    const service = () => {
        if(layer == 0){
            return services[index];
        }
        return services[index].subServices[subIndex];
        
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleRemove = () => {
        if(layer == 0){
            const nServices = [...services];
            nServices.splice(index, 1);
            setServices(nServices);
        }
        else{
            const nServices = [...services];
            (nServices[index].subServices)?.splice(subIndex, 1);
            setServices(nServices);
        }
    };

    return <>
        <Card>
            <Grid container alignItems={'center'} justifyContent={'space-between'} style={{color: '#616060D1', height:50, paddingLeft: 22, paddingRight: 12}}>
                <Grid item>
                    {service().name}
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
        <div style={{marginLeft: 22}}>{(layer == 0 && open) && service().subServices?.map(
            (s, j) => {
                return <ServiceCard services={services} setServices={setServices} layer={1} index={index} subIndex={j} key={s.id}></ServiceCard>
            } 
        )
        }</div>
    </>
    };