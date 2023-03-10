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
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { GridProps } from '@mui/material/Grid';
export type RadioButtonsProps = {
    border?: boolean;
    buttonProps?: ButtonProps;
    defaultValue?: string;
    gridContainerProps?: GridProps;
    gridItemProps: GridProps;
    inputRef?: React.LegacyRef<HTMLInputElement>;
    label?: string;
    onChange: (value: string) => void;
    options: {
        value: string;
        text?: string;
    }[];
    value?: string;
    variant: 'free' | 'grid';
};
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
declare function RadioButtons(props: RadioButtonsProps): JSX.Element;
declare namespace RadioButtons {
    var propTypes: {
        border: PropTypes.Requireable<boolean>;
        buttonProps: PropTypes.Requireable<object>;
        defaultValue: PropTypes.Requireable<string>;
        gridContainerProps: PropTypes.Requireable<object>;
        gridItemProps: PropTypes.Requireable<object>;
        inputRef: PropTypes.Requireable<NonNullable<((...args: any[]) => any) | PropTypes.InferProps<{
            current: PropTypes.Requireable<any>;
        }> | null | undefined>>;
        label: PropTypes.Requireable<string>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        options: PropTypes.Validator<(Required<PropTypes.InferProps<{
            value: PropTypes.Validator<string>;
            text: PropTypes.Requireable<string>;
        }>> | null | undefined)[]>;
        value: PropTypes.Requireable<string>;
        variant: PropTypes.Validator<string>;
    };
    var defaultProps: {
        border: boolean;
        buttonProps: {
            variant: string;
        };
        gridContainerProps: {};
        gridItemProps: {};
        variant: string;
    };
}
export default RadioButtons;
