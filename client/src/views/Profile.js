import React from "react";
import Grid from '@material-ui/core/Grid';

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import SchedulerComponent from "../components/Scheduler";

export const ProfileComponent = () => {
  const { user } = useAuth0();
  return (
    <div>
      <Grid container style={{ padding: '30px 25%', background: 'turquoise', width: '100%' }}>
        <Grid item md={2}>
          <img
            src={user.picture}
            alt="Profile"
            style={{borderRadius: 15}}
          />
        </Grid>
        <Grid item md={10} style={{ color: 'white', width: '100%' }}>
          <h2 style={{ color: 'white', fontWeight: 600, marginBottom: 5 }}>{user.name}</h2>
          <p style={{ marginTop: 5 }}>transporteur</p>
        </Grid>
      </Grid>
      <Grid container spacing={6} style={{ padding: '30px 25%', width: '100%' }}>
      <Grid item md={12}>
          <h2>Prenez votre rendez-vous en ligne</h2>
          <h3>Sélectionnez votre rendez-vous</h3>
          <SchedulerComponent />
        </Grid>
        <Grid item md={12}>
          <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
        </Grid>
      </Grid>
    </div>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
