import React, {useState} from 'react';
import WidgetsList from '../components/WidgetsList';
import AddWidgetModal from '../components/AddWidgetModal';
function WidgetsPage() {

    return (<>
        <WidgetsList />
        <AddWidgetModal />
    </>);
}

export default WidgetsPage