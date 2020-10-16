import React, {useEffect} from 'react';
import { connect, ConnectedProps} from 'react-redux';
import {Widget} from './Widget';
import {removeWidget, addWidget} from './../actions';
import { RootState } from '../store';


interface OwnProps {

}

const mapState = (state: RootState) => ({
    widgets: state.widgets.widgets,
});


const mapDispatch = (dispatch: Function) => ({
    removeWidget: () => dispatch(removeWidget(0)),
    addWidget: () => dispatch(addWidget(0)),
});


const connector = connect(mapState, mapDispatch)

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
}

const WidgetList = (props: Props) => { 



    return <ul>
        {
            props.widgets.map((widget: Widget, idx: number) => <li key={idx}>
                {widget.name}
            </li>)
        }
    </ul>
};




export default connector(WidgetList)
