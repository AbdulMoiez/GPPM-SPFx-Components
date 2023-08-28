import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import EssHrApplicationHistory from './components/EssHrApplicationHistory';
import { IEssHrApplicationHistoryProps } from './components/IEssHrApplicationHistoryProps';

export interface IEssHrApplicationHistoryWebPartProps {
  description: string;
}

export default class EssHrApplicationHistoryWebPart extends BaseClientSideWebPart<IEssHrApplicationHistoryWebPartProps> {


  public render(): void {
    const element: React.ReactElement<IEssHrApplicationHistoryProps> = React.createElement(
      EssHrApplicationHistory,
      {}
    );

    ReactDom.render(element, this.domElement);
    require('./assets/EssHrApplicationHistoryWebPart.css');
  }

}
