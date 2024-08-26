import { Card, Grid } from '@mui/material'
import styles from './styles.module.css'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import Dog from '../../assets/img/dog.jpg'

export default function Aside(){

    return <Card className={styles.container}>
            <Grid container rowSpacing={2}>
                <Option text='DASHBOARD' icon={<HomeIcon/>}/>
                <Option text='TICKETS' icon={<FormatListBulletedOutlinedIcon/>}/>
                <Option text='USUARIOS' icon={<PeopleAltOutlinedIcon/>}/>
                <Option text='CONFIGURACIÓN' icon={<SettingsSuggestOutlinedIcon/>}/>
            </Grid>
            <img className={styles.img} src={Dog}></img>
        </Card>
}

interface OptionProps{
    icon: React.FC,
    text: string
}

const Option:React.FC<OptionProps> = ({icon, text}) => {
    return<>
        <Grid item xs={12}>
            <Grid container className={styles.option} columnSpacing={1} alignContent={'center'} alignItems={'center'} style={{padding: 6}}>
                <Grid item>
                    {icon}
                </Grid>
                <Grid item>
                    {text}
                </Grid>
            </Grid>
        </Grid>
    </>;
}