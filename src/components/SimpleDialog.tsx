import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


type Props = {
    onClose: Function;
    open: boolean;
}

function SimpleDialog(props: Props) {
    const { onClose } = props;
  
    const handleClose = () => {
      onClose(false);
    };
  
    const handleDelete = () => {
      onClose(true);
    };
  
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={props.open}>
            <DialogTitle id="simple-dialog-title">Are you sure to delete this widget</DialogTitle>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="outlined" color="primary" onClick={handleDelete}>
                Delete
            </Button>
        </Dialog>
    );
  }


  export default SimpleDialog;
