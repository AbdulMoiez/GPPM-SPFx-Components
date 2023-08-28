import * as React from 'react';
import { ITabsProps } from './ITabsProps';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";

export default class Tabs extends React.Component<ITabsProps, {}> {
  public render(): React.ReactElement<ITabsProps> {
    const { tabsConfig, tabData } = this.props;
    const isConfigure = tabData && tabData.length > 0

    const TabsSectionHtml = () => {
      return (
        <div data-addui='tabs'>
          <div role='tabs' id={tabsConfig.tabsDiv}></div>
          <div role='contents' id={tabsConfig.contentsDiv}></div>
        </div>
      );
    };

    console.log('sdf', isConfigure, tabData, TabsSectionHtml());

    return (
      <section>
        {
          isConfigure ?
            TabsSectionHtml() :
            <Placeholder iconName='Edit'
              iconText='Configure your tabs'
              description='Please configure the tabs.'
              buttonLabel='Configure'
              onConfigure={this.props._onConfigure}
            />
        }
      </section>
    );
  }
}
