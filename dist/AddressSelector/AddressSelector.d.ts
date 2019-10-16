import * as React from 'react';
import 'shared/styles/geosuggest.scss';
declare type AddressSelectorProps = {
    value?: string;
    placeholder: string;
    disabled: boolean;
    onChange: (address: string) => void;
    className?: string;
    invalid: boolean;
    disabledPlaceholder: string;
};
export declare class AddressSelector extends React.Component<AddressSelectorProps> {
    _geoSuggest: any;
    static defaultProps: {
        placeholder: string;
        disabledPlaceholder: string;
        disabled: boolean;
        invalid: boolean;
    };
    state: {
        viewState: string;
    };
    enableEdit: () => void;
    disableEdit: () => void;
    _focusGeosuggest: () => any;
    _onBlur: (address: string) => void;
    _onSelect: (googlePlacesObject: any) => void;
    renderSuggestItem: (suggestion: any) => JSX.Element;
    render(): JSX.Element;
}
export {};
