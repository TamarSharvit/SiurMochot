import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../css/newRegister.css';
const ValidateTextField = (props) => {
    const [value, setValue] = useState('');
    const [isValidateValue, setIsValidateValue] = useState(false);

    useEffect(() => {
        setIsValidateValue(props.validate())
    }, [value]);

    useEffect(() => {
        setIsValidateValue(false);
    }, []);

    const onChange = (value) => {
        props.onChange(value);
        setValue(value);
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }));

    return (
        <TextField className="button1"
            error={isValidateValue}
            id="outlined-error-helper-text"
            id="outlined-basic"
            label={isValidateValue && "Error"}
            label={props.lable}
            defaultValue={props.value}
            helperText={isValidateValue && props.errorMessage}
            variant="outlined"
            value={props.value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}
export default ValidateTextField;


