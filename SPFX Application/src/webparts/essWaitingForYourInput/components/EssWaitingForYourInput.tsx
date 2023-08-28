import * as React from 'react';
import { IEssWaitingForYourInputProps } from './IEssWaitingForYourInputProps';

export default class EssWaitingForYourInput extends React.Component<IEssWaitingForYourInputProps, {}> {
  public render(): React.ReactElement<IEssWaitingForYourInputProps> {
    const { } = this.props;

    return (
      <section>
        <div className="overflow-auto">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

          <table className="form3-table">
            <tr className="form3-row1">
              <td colSpan={2}>Req.Form No.</td>
              <td colSpan={2}>Application Date</td>
              <td colSpan={2} className="fix-width">Request Form Type</td>
              <td colSpan={2}>Department</td>
              <td colSpan={2}>Employee No.</td>
              <td colSpan={2}>Employee</td>
              <td colSpan={2}>Status</td>
              <td colSpan={2}>Audit Count</td>
              <td colSpan={2}>Action</td>
            </tr>
            <tr>
              <td colSpan={18} style={{ padding: '15px', textAlign: 'center' }}>No Data Found...</td>
            </tr>
          </table>
        </div>
      </section>
    );
  }
}
