import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import EssWaitingForYourInput from './components/EssWaitingForYourInput';
import { IEssWaitingForYourInputProps } from './components/IEssWaitingForYourInputProps';

export interface IEssWaitingForYourInputWebPartProps {
  description: string;
}

export default class EssWaitingForYourInputWebPart extends BaseClientSideWebPart<IEssWaitingForYourInputWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEssWaitingForYourInputProps> = React.createElement(
      EssWaitingForYourInput,
      {}
    );

    ReactDom.render(element, this.domElement);
    require('./assets/EssWaitingForYourInputWebPart.css');
  }

}
