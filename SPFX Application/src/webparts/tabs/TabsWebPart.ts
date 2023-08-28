import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';

import * as strings from 'TabsWebPartStrings';
import Tabs from './components/Tabs';
import * as $ from 'jquery';
import { ITabsProps } from './components/ITabsProps';

export interface ITabsWebPartProps {
  description: string;
  sectionClass: string;
  webpartClass: string;
  tabData: any[];
}

export default class TabsWebPart extends BaseClientSideWebPart<ITabsWebPartProps> {

  public render(): void {
    $(this.domElement).closest("div." + this.properties.webpartClass).attr("id");
    const { RenderTabs } = require('./assets/Tabs.js');
    require('./assets/Tabs.css');

    const tabWebPartID = this.domElement.closest("." + this.properties.webpartClass)?.id || ""
    const tabConfig = {
      tabWebPartID: tabWebPartID,
      tabsDiv: tabWebPartID + "tabs",
      contentsDiv: tabWebPartID + "Contents",
    }

    const element: React.ReactElement<ITabsProps> = React.createElement(
      Tabs,
      {
        tabsConfig: tabConfig,
        tabData: this.properties.tabData,
        _onConfigure: this._onConfigure
      }
    );

    ReactDom.render(element, this.domElement);

    this.renderTabsContent(tabConfig)
    RenderTabs();
  }
  private _onConfigure = () => {
    this.context.propertyPane.open();
  }

  private renderTabsContent(tabConfig: any): void {
    const thisTabData = this.properties.tabData;

    const tabsDiv = document.getElementById(tabConfig.tabsDiv);
    if (tabsDiv) tabsDiv.innerHTML = '';

    for (const x in thisTabData) {
      const tabLabel = thisTabData[x].TabLabel;
      const webPartID = thisTabData[x].WebPartID;

      const tabDiv = document.createElement("div");
      tabDiv.textContent = tabLabel;
      document.getElementById(tabConfig.tabsDiv)?.appendChild(tabDiv);

      const contentElement = document.getElementById(tabConfig.contentsDiv);
      const webPartElement = document.getElementById(webPartID);
      if (contentElement && webPartElement) {
        contentElement.appendChild(webPartElement);
      }
    }
  }

  private getZones(): Array<[string, string]> {
    const zones = new Array<[string, string]>();

    const tabWebPartID = this.domElement.closest("." + this.properties.webpartClass)?.id;
    const zoneDIV = this.domElement.closest("." + this.properties.sectionClass);
    let count = 1;
    const zoneElements = zoneDIV?.querySelectorAll("." + this.properties.webpartClass);

    zoneElements?.forEach(function (element) {
      const thisWPID = element.id;
      if (thisWPID !== tabWebPartID) {
        const zoneId = element.id;
        const zoneName = "Web Part " + count;
        count++;
        zones.push([zoneId, zoneName]);
      }
    });

    return zones;
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('sectionClass', {
                  label: strings.SectionClass,
                  description: "Class identifier for Page Section, don't touch this if you don't know what it means."
                }),
                PropertyPaneTextField('webpartClass', {
                  label: strings.WebPartClass,
                  description: "Class identifier for Web Part, don't touch this if you don't know what it means."
                }),
                PropertyFieldCollectionData("tabData", {
                  key: "tabData",
                  label: strings.TabLabels,
                  panelHeader: "Specify Labels for Tabs",
                  manageBtnLabel: "Manage Tab Labels",
                  value: this.properties.tabData,
                  fields: [
                    {
                      id: "WebPartID",
                      title: "Web Part",
                      type: CustomCollectionFieldType.dropdown,
                      required: true,
                      options: this.getZones().map((zone: [string, string]) => {
                        return {
                          key: zone["0"],
                          text: zone["1"],
                        };
                      })

                    },
                    {
                      id: "TabLabel",
                      title: "Tab Label",
                      type: CustomCollectionFieldType.string
                    }
                  ],
                  disabled: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
