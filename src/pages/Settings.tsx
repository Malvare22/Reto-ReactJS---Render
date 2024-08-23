import { Container, Grid } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { ServiceCard } from "./Components/ServiceCard";
import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { Service } from "../type/Service";
import { fetchCSV } from "../utilities/readCSV";
import ServicesModal from "./Components/Modal";
import { ServicesModalContext } from "../context/ServicesModalContext";
import { AddService } from "./Components/AddService";
import { IndexForService } from "../type/IndexForService";

export default function Settings(){

    const [services, setServices] = useState<Service[]>();
    const [viewModal, setViewModal] = useState(false);
    const [modalType, setModalType] = useState(0);
    const [indexForService, setIndexForService] = useState<IndexForService | null>(null);
    const ModalContext = ServicesModalContext;

    useEffect(
        () => {
            const f = async () =>{
                const buffer = await fetchCSV()
                if(buffer) setServices(buffer.slice(0, 6));
            }
            f();
        }, []
    )

    return<Container>
        <ModalContext.Provider value={{viewModal, setViewModal, setIndexForService, modalType, setModalType}}>
            <ServicesModal services={services}></ServicesModal>
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
        </ModalContext.Provider>
    </Container>;
}

interface ServicesContainerProps{
    services: Service[],
    setServices: React.Dispatch<SetStateAction<Service[]>>
}

const ServicesContainer: React.FC<ServicesContainerProps> = ({services, setServices}) => {

    const {setIndexForService, setModalType} = useContext(ServicesModalContext);

    const handleAdd = () => {
        setIndexForService({i:-1, j:-1});
        setModalType(0);
    }

    return<div style={{padding: 12, border: 'solid 1px black'}}>
        <Grid container alignContent={'center'} style={{backgroundColor: '#0047BA', color: '#FFFFFF', height:50, paddingLeft: 22}}>
            <div>
                Catálogo de Servicios
            </div>
        </Grid>
        <div onClick={handleAdd}><AddService></AddService></div>
        <Grid container style={{paddingLeft: 22}}>
            {services && services.map(
                (s, i) => {
                    return <Grid item xs={12}><ServiceCard index={i} subIndex={-1} services={services} setServices={setServices} layer={0} key={s.id}></ServiceCard></Grid>;
                }
            )}
        </Grid>
    </div>;
}

