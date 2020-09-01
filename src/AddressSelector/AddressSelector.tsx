import * as React from 'react';
import Geosuggest from 'react-geosuggest';

import { Address } from './Addres';

type AddressStaticProps = {
  address?: string;
  disabled: boolean;
  disabledPlaceholder: string;
  invalid: boolean;
  onClick: () => void;
  placeholder: string;
};

class AddressStatic extends React.Component<AddressStaticProps> {
  render() {
    const { address, disabled, disabledPlaceholder, placeholder } = this.props;

    const displayedAddress = address ? address : disabled ? disabledPlaceholder : placeholder;

    return (
      <div
        tabIndex={0}
        onFocus={() => {
          !this.props.disabled && this.props.onClick();
        }}
        className={`h-auto form-control ${this.props.invalid ? 'is-invalid' : ''} ${address ? '' : 'placeholder'}`}
      >
        <Address address={displayedAddress} placeholder={placeholder} />
      </div>
    );
  }
}

interface AddressSelectorProps {
  // required
  disabled: boolean;
  placeholder: string;
  invalid: boolean;
  disabledPlaceholder: string;
  includeHiddenInput: boolean;
  includeStatic: boolean;
  // optional
  className?: string;
  name?: string;
  onChange?: (...args: any[]) => any;
  value?: string;
}

type ViewStateType = 'editing' | 'static';

interface AddressSelectorState {
  viewState: ViewStateType;
  value: string;
}

export class AddressSelector extends React.Component<AddressSelectorProps, AddressSelectorState> {
  static defaultProps = {
    placeholder: '123 Main St., City, State ZIP',
    disabledPlaceholder: 'Contact support to add an address',
    disabled: false,
    invalid: false,
    includeHiddenInput: false,
    includeStatic: true,
    name: 'address',
  };

  _geoSuggest: Geosuggest;

  state = { viewState: 'static' as ViewStateType, value: '' };

  enableEdit = () => this.setState({ viewState: 'editing' }, this._focusGeosuggest);

  disableEdit = () => this.setState({ viewState: 'static' });

  _focusGeosuggest = () => this._geoSuggest.focus();

  _onBlur = (address: string) => {
    if (address) this.updateValue(address);
    this.disableEdit();
  };

  _onSelect = (googlePlacesObject: any) => {
    const value = googlePlacesObject == undefined ? '' : googlePlacesObject.gmaps.formatted_address;

    this.updateValue(value, googlePlacesObject);
    this.disableEdit();
  };

  reset = () => {
    this.setState({ viewState: 'static', value: '' });
  };

  updateValue = (value: string, googlePlacesObject?: any): void => {
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(value, googlePlacesObject);
  };

  renderSuggestItem = (suggestion: any) => <Address address={suggestion.label} />;

  render() {
    const {
      placeholder,
      className,
      disabled,
      invalid,
      disabledPlaceholder,
      includeHiddenInput,
      includeStatic,
      name,
    } = this.props;
    const value = this.props.value || this.state.value; // if value isn't passed, component keeps track of its own state
    return this.state.viewState == 'editing' || !includeStatic ? (
      <>
        {value && value != '' && includeHiddenInput && <input type="hidden" name={name} value={value} />}
        <Geosuggest
          ref={(i) => {
            this._geoSuggest = i as Geosuggest;
          }}
          className={className}
          placeholder={placeholder}
          initialValue={value}
          renderSuggestItem={this.renderSuggestItem}
          onSuggestSelect={this._onSelect}
          onBlur={this._onBlur}
          name={name}
        />
      </>
    ) : (
      <AddressStatic
        address={value}
        onClick={this.enableEdit}
        disabled={disabled}
        invalid={invalid}
        placeholder={placeholder}
        disabledPlaceholder={disabledPlaceholder}
      />
    );
  }
}
