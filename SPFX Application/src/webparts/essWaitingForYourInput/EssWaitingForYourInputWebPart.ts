import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

export interface IEssWaitingForYourInputWebPartProps {
  description: string;
}

export default class EssWaitingForYourInputWebPart extends BaseClientSideWebPart<IEssWaitingForYourInputWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="overflow-auto">
      <table class="form3-table">
        <tr class="form3-row1">
          <td colspan="2">Req.Form No.</td>
          <td colspan="2">Application Date</td>
          <td colspan="2" class="fix-width">Request Form Type</td>
          <td colspan="2">Department</td>
          <td colspan="2">Employee No.</td>
          <td colspan="2">Employee</td>
          <td colspan="2">Status</td>
          <td colspan="2">Audit Count</td>
          <td colspan="2">Action</td>
        </tr>
        <tr>
          <td colspan="18" style="padding: 15px; text-align: center;"> No Data Found...</td>
        </tr>
      </table>
    </div>
    `;
    require('./EssWaitingForYourInputWebPart.css');
  }
}
