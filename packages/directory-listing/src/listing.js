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
          tr {
            border-top: 1px solid #eaecef;
          }

          td a {
            text-decoration: none;
          }

          td a:hover {
            text-decoration: underline;
            outline-width: 0;
          }

          tr:hover {
            background-color: #f6f8fa;
            transition: background-color 0.1s ease-out;
          }

          tr:first-child {
            border-top: none;
          }

          tr:last-child {
            border-bottom: none;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 2px;
            border-spacing: 0;
          }

          td a:hover {
            outline-width: 0;
            text-decoration: underline;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
