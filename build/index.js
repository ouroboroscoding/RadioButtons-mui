/**
 * Radio Buttons
 *
 * Components to make buttons that act like radio inputs, only one can be
 * selected at a time
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2023-01-22
 */
// NPM modules
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
/**
 * Radio Buttons
 *
 * Handles generating a group of buttons
 *
 * @name RadioButtons
 * @access public
 * @param Object props Properties passed to the component
 * @return React.Component
 */
export default function RadioButtons(props) {
    // State
    const [value, valueSet] = useState(props.defaultValue || props.value || '');
    // Value effect
    useEffect(() => {
        valueSet(props.value || '');
    }, [props.value]);
    // Called when any button is clicked
    function click(val) {
        // Set the state
        valueSet(val);
        // If we have a onChange prop
        if (props.onChange) {
            props.onChange(val);
        }
    }
    // What style to generate?
    let Content = null;
    switch (props.variant) {
        // Free form, one button after the other
        case 'free':
            Content = props.options.map(o => {
                const oProps = {
                    key: o.value,
                    onClick: () => click(o.value),
                    ...props.buttonProps
                };
                if (o.value === value) {
                    oProps.color = 'primary';
                    oProps.disableElevation = true;
                }
                else {
                    oProps.color = 'info';
                }
                return React.createElement(Button, { ...oProps }, o.text || o.value);
            });
            break;
        // Grid form,
        case 'grid':
            Content = (React.createElement(Grid, { container: true, ...props.gridContainerProps }, props.options.map(o => {
                const oProps = {
                    onClick: () => click(o.value),
                    ...props.buttonProps
                };
                if (o.value === value) {
                    oProps.color = 'primary';
                    oProps.disableElevation = true;
                }
                else {
                    oProps.color = 'info';
                }
                return (React.createElement(Grid, { item: true, key: o.value, ...props.gridItemProps },
                    React.createElement(Button, { ...oProps }, o.text || o.value)));
            })));
            break;
        // no default
    }
    // Render
    return (React.createElement(Box, { className: 'RadioButtons' + (props.label ? ' RadioButtonsLabel' : '') + (props.border ? ' RadioButtonsBorder' : '') },
        props.label &&
            React.createElement(Typography, { className: "legend" }, props.label),
        props.inputRef &&
            React.createElement("input", { type: "hidden", ref: props.inputRef, value: value }),
        Content));
}
// Valid props
RadioButtons.propTypes = {
    border: PropTypes.bool,
    buttonProps: PropTypes.object,
    defaultValue: PropTypes.string,
    gridContainerProps: PropTypes.object,
    gridItemProps: PropTypes.object,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any })
    ]),
    label: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.exact({
        value: PropTypes.string.isRequired,
        text: PropTypes.string
    })).isRequired,
    value: PropTypes.string,
    variant: PropTypes.oneOf(['free', 'grid']).isRequired
};
// Default props
RadioButtons.defaultProps = {
    border: false,
    buttonProps: { variant: 'contained' },
    gridContainerProps: {},
    gridItemProps: {},
    variant: 'free'
};
