import { Grid } from "@mui/material";
import LogotipoMacropay from "../../assets/svg/LogotipoMacropay";
import styles from './styles.module.css'
import List from "../../assets/svg/List";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header(){

    return <>
    <Grid container style={{padding: 6, backgroundColor: '#FFFFFF'}} justifyContent={'space-between'} alignContent={'center'}>
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
                        <Grid item xs={12} style={{color: '#0047BA', fontSize: '16px', textAlign: 'end'}}>
                            Macropayer Pedro Solar
                        </Grid>
                        <Grid item xs={12} style={{color: '#4B5468', fontSize: '14px', textAlign: 'end'}}>
                            CORP4-AVMEJIA
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} alignContent={'center'}>
                    <Grid container justifyContent={'center'}>
                        <AccountCircleIcon style={{fill:'#31C462', width:40, height: 40}}></AccountCircleIcon>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </>
}