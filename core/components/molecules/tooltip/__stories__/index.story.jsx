import * as React from 'react';
import { Tooltip, Button } from '@/index';

// CSF format story
export const all = () => {
  const position = 'bottom';
  const appendToBody = true;
  const hoverable = false;
  const tooltip = 'An awesome tooltip';

  const options = {
    tooltip,
    hoverable,
    position,
    appendToBody,
  };

  return (
    <div className="mt-8 ml-12">
      <Tooltip {...options}>
        <Button>Hover over me</Button>
      </Tooltip>
    </div>
  );
};

export default {
  title: 'Components/Tooltip/All',
  component: Tooltip,
};
