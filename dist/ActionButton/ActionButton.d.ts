import * as React from 'react';
interface PropsType {
    children: React.ReactNode;
    duringContent?: React.ReactNode;
    afterContent?: React.ReactNode;
    onClick: Function;
}
interface StateType {
    disabled: boolean;
    status: string;
}
export declare class ActionButton extends React.Component<PropsType & React.HTMLProps<HTMLButtonElement>, StateType> {
    static states: {
        init: string;
        during: string;
        done: string;
    };
    readonly state: {
        disabled: boolean;
        status: string;
    };
    done(): void;
    reset(): void;
    renderContents(): {} | null | undefined;
    render(): JSX.Element;
}
export {};
