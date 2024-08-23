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
} 

/**
 * mModalType = 0 (create), 1 (edit)
 */
const ServicesModal:React.FC<ServicesModalProps> = ({services}) => {
  
  const {viewModal, setViewModal, modalType, indexForService} = React.useContext(ServicesModalContext);

  const [service, setService] = React.useState<Service>();

  React.useEffect(

    () => {
      if(modalType == 0){
        setService({
          id: 0,
          description: '',
          name: ''
        })
      }
      else{
        if(indexForService.j == -1){
          setService(services[indexForService.i]);
        }
        else{
          setService(services[indexForService.i].subServices[indexForService.j]);
        }
      }
    }, []
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
                <Grid item xs={12} justifyContent={'center'} style={{color: '#262626', fontSize: 20, textAlign: 'center'}}>{modalType == 0? 'Agregar categoría - Servicio': 'Editar categoría - Servicio'}</Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Nombre"
                        defaultValue=""
                        style={{width: '100%'}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Descripción de la categoría *"
                        multiline
                        rows={4}
                        defaultValue=""
                        style={{'width': '100%'}}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent={'end'}>
                    <Button style={{backgroundColor: '#0047BA', fontSize: 12, width: '100px', height: '40px'}} variant="contained">Aceptar</Button>
                </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default ServicesModal;
