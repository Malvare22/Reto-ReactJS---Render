import { Container, Grid } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { AddService, ServiceCard } from "./Components/ServiceCard";
import React, { SetStateAction, useEffect, useState } from "react";
import { Service } from "../type/Service";
import { fetchCSV } from "../utilities/readCSV";

export default function Settings(){

    const [services, setServices] = useState<Service[]>([]);

    useEffect(
        () => {
            const f = async () =>{
                const buffer = await fetchCSV()
                if(buffer) setServices(buffer);
            }
            f();
        }, []
    )

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
        <ServicesContainer services={services} setServices={setServices}></ServicesContainer>
    </Container>;
}

interface ServicesContainerProps{
    services: Service[],
    setServices: React.Dispatch<SetStateAction<Service[]>>
}

const ServicesContainer: React.FC<ServicesContainerProps> = ({services, setServices}) => {
    return<div style={{padding: 12, border: 'solid 1px black'}}>
        <Grid container alignContent={'center'} style={{backgroundColor: '#0047BA', color: '#FFFFFF', height:50, paddingLeft: 22}}>
            <div>
                Catálogo de Servicios
            </div>
        </Grid>
        <AddService></AddService>
        <Grid item>
            {services.map(
                (s, i) => {
                    if(i < 5) return <ServiceCard service={s} layer={0} key={i}></ServiceCard>;
                }
            )}
        </Grid>
    </div>;
}

