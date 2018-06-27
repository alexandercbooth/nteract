// @flow
import * as React from "react";

export type ListingProps = { children: React.Node };

export default class Listing extends React.Component<ListingProps> {
  render() {
    return (
      <React.Fragment>
        <div>
          <table>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
        <style jsx>{`
          table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 2px;
            border-spacing: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
