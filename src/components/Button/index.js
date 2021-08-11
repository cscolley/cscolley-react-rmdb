import React from 'react';

// Styles
import { Wrapper } from './Button.styles';

const Button = ({ text, calllback }) => (
    <Wrapper type='button' onClick={calllback}>
        {text}
    </Wrapper>
);

export default Button;