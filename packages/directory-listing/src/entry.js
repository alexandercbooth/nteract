// @flow
import * as React from "react";

import { areComponentsEqual } from "react-hot-loader";

import TimeAgo from "@nteract/timeago";
import { Book, FileText, FileDirectory } from "@nteract/octicons";

type EntryProps = { children?: React.Node };

export default class Entry extends React.Component<EntryProps, *> {
  static Icon = ({
    fileType
  }: {
    fileType: "unknown" | "notebook" | "directory" | "file" | "dummy"
  }) => {
    let icon = <FileText />;
    switch (fileType) {
      case "notebook":
        icon = <Book />;
        break;
      case "directory":
        icon = <FileDirectory />;
        break;
      case "file":
        icon = <FileText />;
        break;
      default:
        icon = <FileText />;
    }

    return (
      <td className="icon">
        {icon}
        <style jsx>{`
          :global(.icon) {
            padding-right: 2px;
            padding-left: 10px;
            width: 17px;
            vertical-align: middle;
            text-align: center;
            opacity: 0.95;
            color: #0366d6;
          }
        `}</style>
      </td>
    );
  };

  static Name = ({ link }: { link: any }) => (
    <td className="name">
      {link}
      <style jsx>{`
        .name {
          vertical-align: middle;
          font-size: 0.9em;
          padding: 8px;
        }

        :global(a) {
          text-decoration: none;
        }

        :global(a:hover) {
          text-decoration: underline;
          outline-width: 0;
        }
      `}</style>
    </td>
  );
  static LastSaved = ({ last_modified }: { last_modified: Date }) => (
    <td className="timeago">
      <TimeAgo date={last_modified} />
      <style jsx>{`
        .timeago {
          text-align: right;
          color: #6a737d;
          padding-right: 10px;
        }
      `}</style>
    </td>
  );
  render() {
    return (
      <tr className="directory-entry">
        {React.Children.map(this.props.children, child => {
          if (
            areComponentsEqual(child.type, Entry.Icon) ||
            areComponentsEqual(child.type, Entry.Name) ||
            areComponentsEqual(child.type, Entry.LastSaved)
          ) {
            return React.cloneElement(child, {
              className:
                typeof child.props.className === String &&
                child.props.className !== ""
                  ? child.props.className + " directory-entry-field"
                  : "directory-entry-field"
            });
          } else {
            return <td className="directory-entry-field">{child}</td>;
          }
        })}
        <style jsx>{`
          tr {
            border-top: 1px solid #eaecef;
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
        `}</style>
      </tr>
    );
  }
}
