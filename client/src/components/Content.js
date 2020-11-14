import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ThousandsCarrierImg from '../assets/millierscarrier.png';
import TwentyFourImg from '../assets/24h7j.png';
import SmsEmailImg from '../assets/smsemail.png';
import DocsImg from '../assets/docs.png';
import SchedulerComponent from "../components/Scheduler";
import contentData from "../utils/contentData";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Content = () => {
    const classes = useStyles();
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Pourquoi prendre rendez-vous avec Carrierlib ?</h1>
        <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item md={3}>
              <img src={ThousandsCarrierImg} width={306} height={250} style={{marginTop: 20}} />
              <p>Accédez aux disponibilités de centaines de transporteur.</p>
            </Grid>
            <Grid item md={3}>
              <img src={TwentyFourImg} width={306} height={273} />
              <p>Prenez rendez vous en ligne, <span style={{ fontWeight: 600 }}>24h/24 et 7j/7.</span></p>
            </Grid>
            <Grid item md={3}>
              <img src={SmsEmailImg} width={306} height={273} />
              <p>Recevez des rappels automatiques par SMS ou par email.</p>
            </Grid>
            <Grid item md={3} style={{ padding: 0 }}>
              <img src={DocsImg} width={306} height={273} style={{marginTop: 12}} />
              <p>Retrouvez votre historique de rendez-vous et vos factures.</p>
            </Grid>
        </Grid>
        <SchedulerComponent />
        <div style={{ margin: 40 }}><h3>Une question ? Besoin d'aide ?</h3> Consultez notre aide en ligne ou contactez-nous</div>
      </div>
    );
  };

export default Content;
