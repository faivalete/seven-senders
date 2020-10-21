import React from 'react';


interface WithNextStepProps {
    validate: Function;
  }

const singleStepForm = <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithNextStepProps> => ({
    validate,
    ...props
  }: WithNextStepProps) => {

    return <Component {...props as P} />;

  }
  
export default singleStepForm;