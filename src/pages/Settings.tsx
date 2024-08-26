import { Container, Grid } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { ServiceCard } from "./Components/ServiceCard";
import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { Service } from "../type/Service";
import { fetchCSV } from "../utilities/readCSV";
import ServicesModal from "./Components/Modal";
import { ServicesModalContext } from "../context/ServicesModalContext";
import { IndexForService } from "../type/IndexForService";
import { createService, initModal } from "../utilities/modal";
import { PlusService } from "./Components/PlusService";
import Breadcrumb from "./Components/Breadcrumb";
import FileModal from "./Components/FileModal/FileModal";

/**
 * El parametro type designa el tipo de modal que se va a emplear: 0 (registro) o 1 (editar)
 * Adicionalmente de envían las coordenadas donde se va a realizar la operación
 */
export default function Settings(){

    const [services, setServices] = useState<Service[]>([]);
    const [viewModal, setViewModal] = useState(false);
    const [modalType, setModalType] = useState(-1);
    const [indexForService, setIndexForService] = useState<IndexForService>({i: -1, j: -1});
    const [modalFileView, setModalFileView] = useState(false);
    const ModalContext = ServicesModalContext;

    useEffect(
        () => {
            const f = async () =>{
                // const buffer = await fetchCSV()
                // if(buffer) setServices(buffer.slice(0, 6));
            }
            f();
        }, []
    )

    const handleOpenFileModal = () => {
        setModalFileView(true);
    };

    return<Container>
        <ModalContext.Provider value={{viewModal, setViewModal, indexForService, setIndexForService, modalType, setModalType}}>
            <FileModal services={services} setServices={setServices} open={modalFileView} setOpen={setModalFileView}/>
            <ServicesModal services={services} setServices={setServices}></ServicesModal>
            <Grid container justifyContent={'space-between'}>
                <Grid item style={{color: '#000000', fontSize: '18px', fontWeight: 'bold'}}>EDICIÓN DE CATÁLOGO</Grid>
                <Grid item>
                    <div onClick={handleOpenFileModal}>
                        <Grid container style={{color: '#000000', fontSize: '18px', fontWeight: 'bold'}}>
                            <Grid item style={{cursor: 'pointer'}}>
                                <AssignmentReturnIcon style={{fill: '#0047BA'}}></AssignmentReturnIcon>
                            </Grid>
                            <Grid item style={{cursor: 'pointer'}}>
                                <SaveOutlinedIcon style={{fill: '#595959'}}></SaveOutlinedIcon>
                            </Grid>
                        </Grid>
                    </div>
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

    const {setIndexForService , setModalType, setViewModal} = useContext(ServicesModalContext);

    return<div style={{padding: 12, backgroundColor: '#FFFFFF'}}>
        <Grid container alignContent={'center'} style={{backgroundColor: '#0047BA', color: '#FFFFFF', height:50, paddingLeft: 22}}>
            <div>
                Catálogo de Servicios
            </div>
        </Grid>
        <div onClick={() => initModal(setIndexForService, setModalType, setViewModal, 0)}><PlusService></PlusService></div>
        <Grid container style={{paddingLeft: 22}}>
            {services && services.map(
                (s, i) => {
                    return <Grid item xs={12}><ServiceCard index={i} subIndex={-1} services={services} setServices={setServices} layer={0} key={s.id}></ServiceCard></Grid>;
                }
            )}
        </Grid>
    </div>;
}

