import * as React from 'react';
interface PropsType {
    done?: boolean;
    hi?: boolean;
    lo?: boolean;
    children: React.ReactNode;
}
export declare class Todo extends React.Component<PropsType> {
    render(): JSX.Element;
}
export {};
