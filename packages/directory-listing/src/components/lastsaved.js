// @flow
import * as React from "react";

import TimeAgo from "@nteract/timeago";

export type LastSavedProps = { last_modified: Date };

export class LastSaved extends React.Component<LastSavedProps, null> {
  static defaultProps = {
    last_modified: null
  };

  render() {
    return (
      <td className="timeago">
        <TimeAgo date={this.props.last_modified} />
        <style jsx>{`
          .timeago {
            text-align: right;
            color: #6a737d;
            padding-right: 10px;
          }
        `}</style>
      </td>
    );
  }
}
