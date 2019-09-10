import * as React from 'react';
interface PropsType {
    children: React.ReactNode;
    duringContent?: React.ReactNode;
    afterContent?: React.ReactNode;
    onClick: Function;
    disabled?: boolean;
}
interface StateType {
    disabled: boolean;
    status: string;
}
export declare class ActionButton extends React.Component<PropsType & React.HTMLProps<HTMLButtonElement>, StateType> {
    static states: {
        [key: string]: string;
    };
    mounted: boolean;
    readonly state: {
        disabled: boolean;
        status: string;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    done(): void;
    reset(milliseconds?: number): void;
    renderContents(): {} | null | undefined;
    render(): JSX.Element;
}
export {};
