import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'

// CSS
import styles from './CountryPicker.module.css';

class CountryPicker extends React.Component {
    render() {
        const countriesList = this.props.data;
        const displayList = countriesList && countriesList[0];
        let optionList = displayList ?
            countriesList.map((country, index) =>
                <option key={index} value={country}>{country}</option>
            ) :
            [];
        return displayList ?
            (
                <FormControl className={styles.formControl}>
                    <NativeSelect defaultValue=''
                        onChange={(e) => this.props.handleCountryChange(e.target.value)}>
                        <option value='global'>Global</option>
                        {optionList}
                    </NativeSelect>
                </FormControl>
            ) :
            null;
    }
}

export default CountryPicker;