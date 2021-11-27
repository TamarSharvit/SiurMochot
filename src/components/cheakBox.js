import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export const  ControlledCheckbox=()=> {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}
