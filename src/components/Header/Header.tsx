import { Grid } from "@mui/material";
import LogotipoMacropay from "../../assets/svg/LogotipoMacropay";
import styles from './styles.module.css'
import List from "../../assets/svg/List";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header(){

    return <>
    <Grid container className={styles.container} justifyContent={'space-between'} alignContent={'center'}>
        <Grid item alignContent={'center'}>
            <Grid container spacing={2}>
                <Grid item>
                <div className={styles.list}><List></List></div>
                </Grid>
                <Grid item>
                    <div className={styles.logo}><LogotipoMacropay></LogotipoMacropay></div>
                </Grid>
            </Grid>
        </Grid>
        <Grid>
            <Grid container justifyContent={'end'} spacing={1}>
                <Grid item xs={8} alignContent={'center'}>
                    <Grid container>
                        <Grid item xs={12} className={styles.txt1}>
                            Macropayer Pedro Solar
                        </Grid>
                        <Grid item xs={12} className={styles.txt2}>
                            CORP4-AVMEJIA
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} alignContent={'center'}>
                    <Grid container justifyContent={'center'}>
                        <div className={styles.svg}><AccountCircleIcon></AccountCircleIcon></div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </>
}