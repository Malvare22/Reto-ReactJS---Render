import { Grid } from "@mui/material";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function InputLayout(){

    return<Grid container justifyContent={'space-between'} alignContent={'center'} style={{border: '1px solid black', width: '100%', height: '40px', padding: 10}}>
        <Grid item alignContent={'center'}>Seleccionar un archivo</Grid>
        <Grid item alignContent={'center'}><FolderOpenIcon/></Grid>
    </Grid>;
}

export function InputLayoutWithIcon(){

    return<Grid container justifyContent={'space-between'} alignContent={'center'} style={{border: '1px solid black', width: '100%', height: '40px', padding: 10}}>
        <Grid item xs={8}>
            <Grid container>
                <Grid xs={2} item><InsertDriveFileIcon/></Grid>
                <Grid xs={6} item alignContent={'center'}>Plantilla.csv</Grid>
            </Grid>
        </Grid>
        <Grid item alignContent={'center'} xs={1} justifyContent={'end'}><FileDownloadIcon/></Grid>
    </Grid>;
}