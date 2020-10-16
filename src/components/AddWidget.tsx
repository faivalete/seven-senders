import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

type OwnProps = {
    onClick: () => void,
}
export type Props = OwnProps; 

function AddWidget(props: Props) {
    return <Fab onClick={props.onClick} color="primary" aria-label="add">
        <AddIcon />
    </Fab>
}

export default AddWidget;

