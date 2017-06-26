// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

export let Button = props =>
  <button className={classNames('slds-button', props.className)} disabled={props.disabled}>
    {props.children}
  </button>;

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Button>Button</Button>
);

export let states = [
  {
    id: 'neutral',
    label: 'Neutral',
    element: <Button className="slds-button_neutral">Button</Button>
  },
  {
    id: 'brand',
    label: 'Brand',
    element: <Button className="slds-button_brand">Button</Button>
  },
  {
    id: 'destructive',
    label: 'Desctructive',
    element: <Button className="slds-button_destructive">Button</Button>
  },
  {
    id: 'inverse',
    label: 'Inverse',
    element: <Button className="slds-button_inverse">Button</Button>,
    Context: <div style={{padding: '0.5rem', background: '#16325c'}} />
  },
  {
    id: 'success',
    label: 'Success',
    element: <Button className="slds-button_success">Button</Button>
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: <Button disabled>Button</Button>
  }
];
