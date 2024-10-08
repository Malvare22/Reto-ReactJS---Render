import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ServicesModalContext } from '../../context/ServicesModalContext';
import { Service } from '../../type/Service';
import { getNextId } from '../../utilities/getNextId';
import { IndexForService } from '../../type/IndexForService';
import { actions, createService, createSubservice, editService, editSubservice, getService } from '../../utilities/modal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ServicesModalProps{
  services: Service[],
  setServices: React.Dispatch<React.SetStateAction<Service[]>>,
} 


/**
 * 
 * types: 
 * 1. Create service
 * 2. Create subService
 * 3. Edit service
 * 4. Edit subService
 */
const ServicesModal:React.FC<ServicesModalProps> = ({services, setServices}) => {
  
  const {viewModal, setViewModal, modalType, indexForService} = React.useContext(ServicesModalContext);

  const [service, setService] = React.useState<Service | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setService({... service, [e.target.name]: e.target.value})
  }

  console.log(service)

  const handleButton = () => {

    let buffer: Service[];

    if(modalType == 0){
      buffer = createService(services, service);
    }
    else if(modalType == 1){
      buffer = createSubservice(services, service, indexForService['i']);
    }
    else if(modalType == 2){
      buffer = editService(services, service, indexForService['i']);
    }
    else if(modalType == 3){
      buffer = editSubservice(services, service, indexForService['i'], indexForService['j']);
    }

    setServices(buffer);
    setViewModal(false);
  };

  React.useEffect(
    () => {
      setService(getService(modalType, indexForService['i'], indexForService['j'], services))
    }, [modalType, indexForService['i'], indexForService['j'], services]
  )

  const handleClose = () => setViewModal(false);

  return (
    <div>
      <Modal
        open={viewModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
          <Grid container rowSpacing={3} style={{marginTop: 10}}>
            <Grid container rowSpacing={6}>
                <Grid item xs={12} justifyContent={'center'} style={{color: '#262626', fontSize: 20, textAlign: 'center'}}>{(modalType == 0 || modalType == 1 )? 'Agregar categoría - Servicio': 'Editar categoría - Servicio'}</Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        name='name'
                        value={service?.name}
                        label="Nombre"
                        defaultValue=""
                        onChange={handleInput}
                        style={{width: '100%'}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Descripción de la categoría *"
                        name='description'
                        value={service?.description}
                        onChange={handleInput}
                        multiline
                        rows={4}
                        defaultValue=""
                        style={{'width': '100%'}}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent={'end'}>
                    <Button onClick={handleButton} style={{backgroundColor: '#0047BA', fontSize: 12, width: '100px', height: '40px'}} variant="contained">Aceptar</Button>
                </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default ServicesModal;
