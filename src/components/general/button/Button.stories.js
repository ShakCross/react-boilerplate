import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import StyledButton from 'components/general/button/Button'

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const buttonData = {
  primary: true,
};

export const buttonActions = {
  clicked: action('clicked'),
};

export const DefaultButton = () => 
     
(    <div>
      <StyledButton data={object('data', { ...buttonData })} {...buttonActions} />
    </div> )
    
 

export const Pinned = () => (
  <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
);

export const Archived = () => <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />;