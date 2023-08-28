import * as React from 'react';
import { IEssHrApplicationProps } from './IEssHrApplicationProps';

export default class EssHrApplication extends React.Component<IEssHrApplicationProps, {}> {
  public render(): React.ReactElement<IEssHrApplicationProps> {
    const { } = this.props;

    return (
      <section>
        <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

          <div className="overflow-auto">
            <table className="First-table">
              <thead>
                <tr>
                  <th className="table-head" colSpan={6}>
                    Employee Withholding Tax Provision Application Form
                  </th>
                </tr>
              </thead>
              <tr>
                <td className="fixed-width">Description</td>
                <td colSpan={5} className="same-textarea">
                  <textarea
                    cols={90}
                    rows={3}
                    style={{ border: '2px solid #878181', color: '#878181' }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </textarea>
                </td>
              </tr>
              <tr>
                <th colSpan={6} className="th-change">
                  Employee Check (Please Check "V")
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="samePad1">
                  <input type="checkbox" id="unfunded" name="unfunded" value="unfunded" />
                  <label htmlFor="unfunded">Unfunded</label>
                </td>
                <td colSpan={4} style={{ padding: '4px 14px 2px 12px' }}>
                  <input type="checkbox" id="funded" name="funded" value="funded" />
                  <label htmlFor="funded">Funded and Adjustment</label>
                  <input type="checkbox" name="5percentage" id="5percentage" value="5%" className="same-border" />
                  <label htmlFor="5percentage">5%</label>
                  <input type="number" id="type%" style={{ width: '58px' }} className="same-border" />
                  <label htmlFor="type%">%</label>
                  <input type="checkbox" name="" id="" className="same-border" />
                  <input type="number" name="" id="integer" style={{ width: '119px' }} className="same-border" />
                  <label htmlFor="integer">(Please fill in an integer in thousands)</label>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="samePad3" style={{ fontWeight: 600 }}>
                  Request Form No.
                </td>
                <td colSpan={2} className="samePad3">
                  <label htmlFor="application_date" style={{ fontWeight: 600 }}>
                    Application Date
                  </label>
                  <input type="date" name="" id="application_date" className="wide-input2" />
                </td>
                <td colSpan={2} style={{ padding: '4px 0px 4px 30px' }}>
                  <label htmlFor="status" style={{ fontWeight: 600 }}>
                    Status
                  </label>
                  <select name="status" id="status" className="select2-style">
                    <option value="000 New">000 New</option>
                    <option value="001 New">001 New</option>
                    <option value="002 New">002 New</option>
                    <option value="003 New">003 New</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="empty-cell" colSpan={2}></td>
                <td className="empty-cell" colSpan={2}></td>
                <td className="empty-cell" colSpan={2}></td>
              </tr>
              <tr>
                <td colSpan={2} style={{ fontWeight: 600, padding: '10px', width: '150px', textAlign: 'center' }}>
                  Comment
                </td>
                <td colSpan={4} className="same-textarea">
                  <textarea name="" id="" cols={10} rows={3}></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan={6} style={{ border: 'none' }}>
                  <div className="btn-div">
                    <button type="button" className="btn btn-primary mr-1">Cancel</button>
                    <button type="button" className="btn btn-primary">Submit</button>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
