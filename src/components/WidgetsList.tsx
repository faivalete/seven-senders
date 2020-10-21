import React, {useEffect, useState} from 'react';
import { connect, ConnectedProps} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import {Widget} from './../reducers/types';
import {removeWidget, addWidget} from './../actions';
import { RootState } from '../store';
import SimpleDialog from './SimpleDialog';
import { useLocalStorageState } from '../hooks';

import styles from './WidgetsList.module.scss';
import { FullscreenExit } from '@material-ui/icons';

const localStore = {'widgets': []};


interface OwnProps {

}

const mapState = (state: RootState) => ({
    widgets: state.widgets.widgets,
});


const mapDispatch = (dispatch: Function) => ({
    removeWidget: (idx: number) => dispatch(removeWidget(idx)),
});


const connector = connect(mapState, mapDispatch)

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
}

function getWidgetList (widgets: Array<Widget>, removeWidget: Function) {

    return widgets.map((value: Widget, idx: number) => (
        <ListItem key={idx}>
            <ListItemText
            primary={value.name}
            secondary={value.language}
            />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => removeWidget(idx)}>
                <DeleteIcon />
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
      display: 'flex',
      margin: '0 auto'
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    list: {
       
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));


const WidgetList = (props: Props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(-1);

    const [
        widgets,
        setWidgets
    ] = useLocalStorageState(localStore.widgets, "widgets");

    useEffect(() => {
        setWidgets(props.widgets)
    }, [props.widgets]);

    function handleRemove(id: number) {

        setSelected(id);
        setOpen(true);
    }

    function handleClose(confirmed: boolean) {

        if (confirmed) {
            props.removeWidget(selected);
        }
        setOpen(false);
    }

    return (
        <>
            <div className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.title}>
                    Widgets List
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={true}>
                            {getWidgetList(
                            props.widgets, handleRemove
                            )}
                        </List>
                    </div>
                </Grid>
                
                
            </div>
            <SimpleDialog onClose={handleClose} open={open}></SimpleDialog>
        </>
    )
    
};




export default connector(WidgetList)
