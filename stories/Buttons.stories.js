import React from 'react';
import Examples from './utils/Examples.js';

import ReactButton from '../src/react/Button';
import SdcButton from '../dist/angular2/Button'
import HTMLButtonPrimary from '../components/button/button-primary.html';
import HTMLButtonWhite from '../components/button/button-white.html';

let examples = {
        Primary: {
            jsx: <ReactButton>Click Me</ReactButton>,
            html: HTMLButtonPrimary,
            angular2: '<sdc-button>Click Me</sdc-button>'
        },
        White: {
            jsx: <ReactButton type='white'>Click Me</ReactButton>,
            html: HTMLButtonWhite,
            angular2: '<sdc-button [type]="white">Click Me</sdc-button>'
        }
    };

const Buttons = () => (
    <Examples examples={examples} />
);

export default Buttons;