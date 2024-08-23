import { Card, Grid } from '@mui/material'
import styles from './styles.module.css'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

export default function Aside(){

    return <Card style={{padding: 10}}>
            <Grid container rowSpacing={2}>
                <Option text='DASHBOARD' icon={<HomeIcon/>}/>
                <Option text='TICKETS' icon={<FormatListBulletedOutlinedIcon/>}/>
                <Option text='USUARIOS' icon={<PeopleAltOutlinedIcon/>}/>
                <Option text='CONFIGURACIÓN' icon={<SettingsSuggestOutlinedIcon/>}/>
            </Grid>
        </Card>
}

interface OptionProps{
    icon: React.FC,
    text: string
}

const Option:React.FC<OptionProps> = ({icon, text}) => {
    return<>
        <Grid item xs={12}>
            <Grid container className={styles.option} columnSpacing={1} alignContent={'center'} alignItems={'center'} style={{border: '1px solid black', padding: 6}}>
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