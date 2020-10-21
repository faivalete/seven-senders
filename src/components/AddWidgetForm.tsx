import React, { Component, useEffect, useState } from 'react'

import StepName from './StepName';
import StepLanguage from './StepLanguage';

type OwnProps = {
    step: number;
    nextStep: Function;
    setLanguage: Function;
    setName: Function;
}
type Props = OwnProps;

enum Steps {
    'LANGUAGE',
    'NAME',
};


function AddWidgetForm(props: Props) {

    function handleSetName(value: string) {
        props.setName(value);
    }

    function handleSetLanguage(value: string) {
        props.setLanguage(value);
        props.nextStep();
    }

    return (
        <>
        {
            props.step === Steps.NAME? 
                <StepName nextStep={handleSetName} /> : null
        }
        {
            props.step === Steps.LANGUAGE? 
                <StepLanguage nextStep={handleSetLanguage} /> : null
        }
        </>
    )
}

export default AddWidgetForm;