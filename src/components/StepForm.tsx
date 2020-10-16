import React from 'react';

interface WithLoadingProps {
    step: number;
    nextStep: Function;
  }

const stepForm = <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithLoadingProps> => ({
    step,
    ...props
  }: WithLoadingProps) => {
    return <Component {...props as P} step={step} />;
  }
export default stepForm;