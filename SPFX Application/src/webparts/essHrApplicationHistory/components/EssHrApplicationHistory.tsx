import * as React from 'react';
import { IEssHrApplicationHistoryProps } from './IEssHrApplicationHistoryProps';

export default class EssHrApplicationHistory extends React.Component<IEssHrApplicationHistoryProps, {}> {
  public render(): React.ReactElement<IEssHrApplicationHistoryProps> {
    const { } = this.props;

    return (
      <section>
        <div className="overflow-auto">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

          <table className="form2-table">
            <tr>
              <td colSpan={6}>
                <label htmlFor="form2-select1" style={{ fontSize: '12px', paddingRight: '23px' }}>
                  Request Form Type
                </label>
                <select name="dept" id="form2-select1">
                  <option value=""></option>
                  <option value="Dept 01">Dept 01</option>
                  <option value="Dept 02">Dept 02</option>
                  <option value="Dept 03">Dept 03</option>
                </select>
              </td>
              <td style={{ fontSize: '12px', padding: '0 20px 0 0' }}>Department</td>
              <td colSpan={2}>
                <select name="dept" id="form2-select2">
                  <option value=""></option>
                  <option value="Dept 01">Dept 01</option>
                  <option value="Dept 02">Dept 02</option>
                  <option value="Dept 03">Dept 03</option>
                </select>
              </td>
              <td className="row1-pad" style={{ fontSize: '12px' }}>Employee</td>
              <td colSpan={2}>
                <input type="text" name="form2-input1" id="form2-input1" placeholder="StaffAAA" />
              </td>
            </tr>
            <tr>
              <td colSpan={1} style={{ padding: '0 25px', fontSize: '12px' }}>From</td>
              <td colSpan={1}>
                <input className="form2-date-input1" type="date" name="" id="test1" />
              </td>
              <td colSpan={1} className="row2-pad">To</td>
              <td colSpan={1}>
                <input className="form2-date-input1" type="date" name="" id="test2" />
              </td>
              <td colSpan={1} className="row2-pad">Status</td>
              <td colSpan={1}>
                <select name="dept" id="form2-select2">
                  <option value=""></option>
                  <option value="Dept 01">Dept 01</option>
                  <option value="Dept 02">Dept 02</option>
                  <option value="Dept 03">Dept 03</option>
                </select>
              </td>
              <td className="form2-btn-div" colSpan={1}>
                <button type="button" className="btn btn-primary">Clear</button>
                <button type="button" className="btn btn-primary">Search</button>
                <button type="button" className="btn btn-primary">Export Excel</button>
                <button type="button" className="btn btn-primary">Export PDF</button>
              </td>
            </tr>
          </table>
          <table className="form2-table2">
            <tr className="form2-row3" style={{ backgroundColor: '#CBCBCB' }}>
              <td colSpan={2}>Req.Form No.</td>
              <td colSpan={2}>Application Date</td>
              <td colSpan={2}>Request Form Type</td>
              <td colSpan={2}>Department</td>
              <td colSpan={2}>Employee No.</td>
              <td colSpan={2}>Employee</td>
              <td colSpan={2}>Status</td>
              <td colSpan={2}>Audit Count</td>
              <td colSpan={2}>Action</td>
            </tr>
            <tr className="form2-row3">
              <td colSpan={2}>EMCT20221118001</td>
              <td colSpan={2}>2021/11/18</td>
              <td colSpan={2}>Employment</td>
              <td colSpan={2}>Dept1</td>
              <td colSpan={2}>0001</td>
              <td colSpan={2}>StaffAAA</td>
              <td colSpan={2}>02 Completed</td>
              <td colSpan={2}>3</td>
              <td colSpan={2} style={{ color: '#FF9900', padding: '0px' }}>
                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '27px' }}></i>
              </td>
            </tr>
          </table>
        </div>
      </section >
    );
  }
}
