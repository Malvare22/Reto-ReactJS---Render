import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export default function Breadcrumb(){
    return <><Breadcrumbs aria-label="breadcrumb">
        <div>
            <HomeIcon/>
        </div>
        <div>
            Configuración
        </div>
        <div>
            Catálogo de Servicios
        </div>
        <div>
            Edición de Catálogo
        </div>
        
        </Breadcrumbs></>;
}
