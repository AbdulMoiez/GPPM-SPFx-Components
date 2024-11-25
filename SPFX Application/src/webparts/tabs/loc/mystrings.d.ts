declare interface ITabsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  SectionClass: string;
  WebPartClass: string;
  TabLabels: string;
}

declare module 'TabsWebPartStrings' {
  const strings: ITabsWebPartStrings;
  export = strings;
}
