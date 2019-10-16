import * as React from 'react';
import 'shared/styles/geosuggest.scss';
import Geosuggest from 'react-geosuggest';

type AddressSelectorProps = {
  value: string;
  placeholder: string;
  disabled: boolean;
  onChange: (address: string) => void;
  className: string;
  invalid: boolean;
  disabledPlaceholder: string;
};

export class AddressSelector extends React.Component<AddressSelectorProps> {
  _geoSuggest: any;

  static defaultProps = {
    placeholder: '123 Main St., City, State ZIP',
    disabledPlaceholder: 'Contact support to add an address',
    disabled: false,
    invalid: false
  };

  state = { viewState: 'static' };

  enableEdit = () => this.setState({ viewState: 'editing' }, this._focusGeosuggest);

  disableEdit = () => this.setState({ viewState: 'static' });

  _focusGeosuggest = () => this._geoSuggest.focus();

  _onBlur = (address: string) => {
    this.props.onChange(address);
    this.disableEdit();
  };

  _onSelect = (googlePlacesObject: any) => {
    const value = googlePlacesObject == undefined ? '' : googlePlacesObject.gmaps.formatted_address;

    this.props.onChange(value);
    this.disableEdit();
  };

  renderSuggestItem = (suggestion: any) => <AddressDisplay address={suggestion.label} />;

  render() {
    const { value, placeholder, className, disabled, invalid, disabledPlaceholder } = this.props;

    return this.state.viewState == 'editing' ? (
      <Geosuggest
        ref={(ref: any) => {
          this._geoSuggest = ref;
        }}
        className={className}
        placeholder={placeholder}
        initialValue={value || ''}
        renderSuggestItem={this.renderSuggestItem}
        onSuggestSelect={this._onSelect}
        onBlur={this._onBlur}
      />
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

type AddressStaticProps = {
  address: string;
  placeholder: string;
  disabled: boolean;
  onClick: () => void;
  invalid: boolean;
  disabledPlaceholder: string;
  renderHiddenInput: boolean;
  hiddenInputName: string;
};

class AddressStatic extends React.Component<AddressStaticProps> {
  static defaultProps = { renderHiddenInput: true, hiddenInputName: 'address' };

  render() {
    const { placeholder, disabled, disabledPlaceholder, renderHiddenInput, hiddenInputName } = this.props;

    const address = this.props.address ? this.props.address : disabled ? disabledPlaceholder : placeholder;

    return (
      <div
        tabIndex={0}
        // autoFocus={true}
        onFocus={() => {
          !this.props.disabled && this.props.onClick();
        }}
        className={`h-auto form-control ${this.props.invalid ? 'is-invalid' : ''} ${
          this.props.address ? '' : 'placeholder'
        }`}
      >
        <AddressDisplay address={address} />
        {renderHiddenInput && <input name={hiddenInputName} value={this.props.address} type="hidden" />}
      </div>
    );
  }
}

type AddressDisplayProps = {
  address?: string;
};

const AddressDisplay: React.FC<AddressDisplayProps> = ({ address }) => {
  if (!address) return null;
  const splitAddressArr = address.split(',');
  const addr1 = splitAddressArr[0];
  const addr2 = splitAddressArr.slice(1).join(',');
  return (
    <React.Fragment>
      <div>{addr1}</div>
      <div>{addr2}</div>
    </React.Fragment>
  );
};
