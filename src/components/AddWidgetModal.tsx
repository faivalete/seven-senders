import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import stepForm from './StepForm';
import AddWidgetForm from './AddWidgetForm';

type OwnProps = {
    onClose: () => void,
    open: boolean,
}
type Props = OwnProps;


function AddWidgetModal(props: Props) {


    const [open, setOpen] = useState(props.open);
    const [step, setStep] = useState(0);
    const StepForm = stepForm(AddWidgetForm);



    return <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <div>
            <StepForm step={step} nextStep={() => setStep(step + 1)} close={() => setOpen(false)}/>
          </div>
      </Modal>
}

export default AddWidgetModal;