import * as React from 'react';
interface PropsType {
    style?: React.CSSProperties;
}
interface StateType {
    validUrl: boolean;
    pending: boolean;
}
export declare class UrlInput extends React.Component<PropsType, StateType> {
    private inputRef;
    private debouncedFetch;
    readonly state: {
        validUrl: boolean;
        pending: boolean;
    };
    validateUrl: () => void;
    render(): JSX.Element;
}
export {};
