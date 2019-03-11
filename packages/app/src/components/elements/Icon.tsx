import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faIgloo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

library.add(faCheckCircle);
library.add(faIgloo);

interface IconProps {
  checkCircle?: boolean;
  color?: string;
}

export class Icon extends Component<IconProps> {

  public render() {
    return <FontAwesomeIcon color={this.props.color} icon={this.getIcon(this.props)}  />
  }

  private getIcon(props: IconProps): IconProp {
    if (props.checkCircle) {
      return faCheckCircle;
    }
    return faIgloo;
  }
}

