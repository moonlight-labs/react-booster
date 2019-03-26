import * as React from 'react';
interface PropsType {
    rows?: number;
    columns?: string[];
}
interface StateType {
}
export declare class Table extends React.Component<PropsType, StateType> {
    dataForColumn(name: string): string;
    render(): JSX.Element;
}
export {};
