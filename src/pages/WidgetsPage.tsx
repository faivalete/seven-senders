import React, {useState} from 'react';
import WidgetsList from '../components/WidgetsList';
import AddWidget from '../components/AddWidget';
import AddWidgetModal from '../components/AddWidgetModal';
function WidgetsPage() {

    const [modalOpen, setModalOpen] = useState(false);


    return (<>
        <WidgetsList />
        {
            modalOpen?
                <AddWidgetModal onClose={ () => setModalOpen(false)} open={modalOpen}/>
            : null
        }
        <AddWidget onClick={ () => setModalOpen(true)}/>
    </>);
}

export default WidgetsPage