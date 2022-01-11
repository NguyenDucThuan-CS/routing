import React, { Component } from "react";

export default class NhanVien extends Component {
  render() {
    return (
      <>
        <div class="form-group">
          <label>Ma sp</label>
          <input type="text" />
        </div>
        <div class="form-group">
          <label>Ten sp</label>
          <input type="text" />
        </div>
      </>
    );
  }
}
