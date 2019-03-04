import * as React from 'react';

import './Heading.scss';

interface HeadingProps {
  text: string;
}

export class Heading extends React.Component<HeadingProps, any> {
    public render(): JSX.Element {
        const { text } = this.props;
        return (
            <div className={"title"}>
                <span className="title__back">{text}</span>
                <span className="title__front">{text}</span>
            </div>
        );
    }
}
