import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import EssHrApplication from './components/EssHrApplication';
import { IEssHrApplicationProps } from './components/IEssHrApplicationProps';

export interface IEssHrApplicationWebPartProps {
  description: string;
}

export default class EssHrApplicationWebPart extends BaseClientSideWebPart<IEssHrApplicationWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEssHrApplicationProps> = React.createElement(
      EssHrApplication,
      {}
    );

    ReactDom.render(element, this.domElement);
    require('./assets/EssHrApplicationWebPart.css');
  }

}
