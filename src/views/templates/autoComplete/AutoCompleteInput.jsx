import React from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import '../../assets/css/InputCustom.css';

class AutoCompleteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: props.value };
    }

    handleChange = address => {
        this.setState({ address});
        this.props.handleChange(address)
    };

    onChange = e => {
        this.setState({ address: e.target.value});
        this.props.onChange(e)
    }

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => {
                console.log(results)
                getLatLng(results[0])})
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));

        this.setState({ address })
        this.props.handleChange(address)
    };

    render() {
        const options = { componentRestrictions: { country: "VN" } }
        const renderSuggestion = ({ suggestion }) => (<div className="suggestAdress"><i className="zmdi zmdi-pin" />{suggestion}</div>)
        const onError = (status, clearSuggestions) => {
            console.log('Google Maps API returned error with status: ', status)
            clearSuggestions()
        }
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                searchOptions={options}
                onError={onError}
                shouldFetchSuggestions={this.state.address.length >= 2}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Nhập địa chỉ nhận xe',
                                className: 'input-tabs',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <i className="zmdi zmdi-pin" />
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        )
    }
}

export default AutoCompleteInput;