import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import stepForm from './StepForm';
import AddWidgetForm from './AddWidgetForm';

import AddWidget from '../components/AddWidget';
import { Widget } from '../reducers/types';
import { addWidget } from '../actions';
import { connect, ConnectedProps } from 'react-redux';

type OwnProps = {
}


type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & OwnProps;


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: `50vw`,
    minHeight: `50vh`,
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));


const mapDispatch = (dispatch: Function) => ({
  addWidget: (values: Widget) => dispatch(addWidget(values)),
});

const connector = connect(null, mapDispatch)

function AddWidgetModal(props: Props) {


    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [language, setLanguage] = useState('');
    const StepForm = stepForm(AddWidgetForm);

    function handleNext() {
      setStep(step + 1);
    }

    function handleSubmit(name: string) {
      setOpen(false);

      props.addWidget({name, language});
      setLanguage('');
      setStep(0);
    }

    return <>

      <AddWidget onClick={ () => setOpen(true)}/>
      <Modal
        open={open}
        className={classes.modal}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <div className={classes.paper}>
            <StepForm step={step} nextStep={handleNext} setName={handleSubmit} setLanguage={setLanguage}/>
          </div>
      </Modal>
    </> 
}

export default connector(AddWidgetModal);