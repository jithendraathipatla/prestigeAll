import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      textAlign:"center"
    },
  }),
);

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" component="h6">
        @ 2019 All rights Reserved
      </Typography>
     
    </Paper>
  );
}