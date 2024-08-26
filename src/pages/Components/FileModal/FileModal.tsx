import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DialogTitle, Grid, IconButton, Input, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ServicesModalContext } from '../../../context/ServicesModalContext';
import { Service } from '../../../type/Service';
import { getNextId } from '../../../utilities/getNextId';
import { IndexForService } from '../../../type/IndexForService';
import { actions, createService, createSubservice, editService, editSubservice, getService } from '../../../utilities/modal';
import InputLayout, { InputLayoutWithIcon } from '../../../components/Inputs/Inputs';
import styles from './style.module.css'
import { processCSV } from '../../../utilities/readCSV';
import { convertToCSV } from '../../../utilities/convertToCSV';
import { downloadCSV } from '../../../utilities/downloadCSV';
import CSV from '../../../assets/svg/CSV';
import Excel from '../../../assets/svg/Excel';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

interface FileModalProps{
  services: Service[],
  setServices: React.Dispatch<React.SetStateAction<Service[]>>,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
} ;

const FileModal : React.FC<FileModalProps> = ({services, setServices, open, setOpen}) => {
  
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file)
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          setServices(processCSV(e.target.result as string))
        }
      };

      reader.onerror = (error) => {
        console.error('File reading error:', error);
      };

      reader.readAsText(file);
    }
  }

  const handleButtonDownloadCSV = () => {
    downloadCSV(convertToCSV(services));
  };

  const handleButtonDownloadExcel = () => {
    downloadCSV(convertToCSV(services));
  };

  const handleClose = () => setOpen(false);

  return <div className={styles.container}>
      <Modal
        open={open}
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
        <Grid container justifyContent={'center'} rowSpacing={4}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <div className={styles.tittle}>Importar</div>
                </Grid>
                <Grid item xs={12}>
                    <div className={styles.selectFile}>
                      {<div onClick={handleButtonClick}><InputLayout/></div>}
                      <Input type='file' inputRef={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}>
                      </Input>
                    </div>
                </Grid>
                <Grid item xs={12} className={styles.label}>
                    Descargar plantilla de importación de datos
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <div className={styles.tittle}>Exportar</div>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container rowSpacing={3}>
                        <Grid item xs={12}>
                          <div>
                            {<div onClick={handleButtonDownloadExcel}><InputLayoutWithIcon label='Plantilla.Excel' svgElement={<Excel></Excel>}/></div>}
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            {<div onClick={handleButtonDownloadCSV}><InputLayoutWithIcon label='Plantilla.Csv' svgElement={<CSV></CSV>}/></div>}
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
            </Grid>
            <Grid item>
                {<Button onClick={handleClose} className={styles.button}>Aceptar</Button>}
            </Grid>
        </Grid>
        </Box>
      </Modal>
    </div>;
}

export default FileModal;