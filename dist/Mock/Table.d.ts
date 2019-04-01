import * as React from 'react';
interface PropsType {
    rows?: number;
    columns?: string[];
    title?: JSX.Element;
}
interface StateType {
}
export declare class Table extends React.Component<PropsType, StateType> {
    dataForColumn(name: string): JSX.Element;
    render(): JSX.Element;
}
export {};
