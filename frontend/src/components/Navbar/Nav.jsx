import { Stepper, Step, StepLabel } from '@mui/material';
import './Nav.css';
import React from 'react';



export default function Nav({ current }) {
    const steps = ['Contact Informatio',
        'Education',
        'Skills',
        'Experience',
        'Resume'
    ];
    return (
        <div className='nav'>
            <Stepper activeStep={current} alternativeLabel >
                {steps.map((ele) => {
                    return (
                        <Step key={ele}>
                            <StepLabel><div>{ele}</div></StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    );
}