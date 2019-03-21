import * as React from 'react';
interface PropsType {
    rows?: number;
    columns?: string[];
}
interface StateType {
}
export declare class MockTable extends React.Component<PropsType, StateType> {
    dataForColumn(name: string): string;
    render(): JSX.Element;
}
export {};
