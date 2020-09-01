import * as React from 'react';
import Geosuggest from 'react-geosuggest';
interface AddressSelectorProps {
    disabled: boolean;
    placeholder: string;
    invalid: boolean;
    disabledPlaceholder: string;
    includeHiddenInput: boolean;
    includeStatic: boolean;
    className?: string;
    name?: string;
    onChange?: (...args: any[]) => any;
    value?: string;
}
declare type ViewStateType = 'editing' | 'static';
interface AddressSelectorState {
    viewState: ViewStateType;
    value: string;
}
export declare class AddressSelector extends React.Component<AddressSelectorProps, AddressSelectorState> {
    static defaultProps: {
        placeholder: string;
        disabledPlaceholder: string;
        disabled: boolean;
        invalid: boolean;
        includeHiddenInput: boolean;
        includeStatic: boolean;
        name: string;
    };
    _geoSuggest: Geosuggest;
    state: {
        viewState: ViewStateType;
        value: string;
    };
    enableEdit: () => void;
    disableEdit: () => void;
    _focusGeosuggest: () => void;
    _onBlur: (address: string) => void;
    _onSelect: (googlePlacesObject: any) => void;
    reset: () => void;
    updateValue: (value: string, googlePlacesObject?: any) => void;
    renderSuggestItem: (suggestion: any) => JSX.Element;
    render(): JSX.Element;
}
export {};
