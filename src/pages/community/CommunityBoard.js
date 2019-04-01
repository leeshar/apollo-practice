import React, { Component } from "react";
import Table from "components/community/BoardTable";

export default class CommunityBoard extends Component {
  render() {
    return (
      <div className="community-board">
        <h3>community</h3>
        <Table />
      </div>
    );
  }
}
