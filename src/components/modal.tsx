  import React from 'react';
  import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
  import Button from '@material-ui/core/Button';
  import Dialog from '@material-ui/core/Dialog';
  import MuiDialogTitle from '@material-ui/core/DialogTitle';
  import MuiDialogContent from '@material-ui/core/DialogContent';
  import MuiDialogActions from '@material-ui/core/DialogActions';
  import IconButton from '@material-ui/core/IconButton';
  import CloseIcon from '@material-ui/icons/Close';
  import Typography from '@material-ui/core/Typography';
  import TextField from '@material-ui/core/TextField';


  const styles = (theme: Theme) =>
    createStyles({
      root: {
        margin: 0,
        padding: theme.spacing(2),
      },
      closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
      },
     
    });

 
    


  export interface DialogTitleProps extends WithStyles<typeof styles> {
    
    id: string;
    children: React.ReactNode;
    onClose: () => void;
  }

  const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme: Theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme: Theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  

  export default function CustomizedDialogs(props:any) {
    console.log(props);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    
    

    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen} >
          {props.children}
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {props.card2}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
            <TextField
            label="Your Name"
            id="margin-dense"
            style={{width:"380px"}}
            margin="dense"
          />
            </Typography>
            <Typography gutterBottom>
            <TextField
            label="Your Email"
            id="margin-dense"
             style={{width:"380px"}}
            margin="dense"
          />
            </Typography>
            <Typography gutterBottom>
            <TextField
            label="Your Phone Number"
            id="margin-dense"
            style={{width:"380px", marginBottom:"40px"}}
            margin="dense"
          />
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Save changes
            </Button>
           
          </DialogActions>
        </Dialog>
      </div>
    );
  }
