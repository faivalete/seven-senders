import React from 'react';


interface WithNextStepProps {
    onValid: Function;
  }

const singleStepForm = <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithNextStepProps> => ({
    onValid,
    ...props
  }: WithNextStepProps) => {

    return <Component {...props as P} />;

  }
  
export default singleStepForm;