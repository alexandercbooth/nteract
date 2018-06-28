// @flow

import * as React from "react";
import * as Immutable from "immutable";
const urljoin = require("url-join");

import { selectors, actions } from "@nteract/core";

import { ThemedLogo } from "../components/themed-logo.js";

import { openNotebook } from "../triggers/open-notebook";

import { Nav, NavSection } from "../components/nav";
import { NewNotebookNavigation } from "@nteract/connected-components";
import { Entry, Listing } from "@nteract/directory-listing";

import type {
  AppState,
  KernelspecRecord,
  KernelspecProps,
  JupyterHostRecord,
  ContentRef,
  ContentRecord,
  DirectoryContentRecord
} from "@nteract/core";

import { connect } from "react-redux";

type DirectoryProps = {
  content: DirectoryContentRecord,
  host: JupyterHostRecord,
  appVersion: string,
  contents: any
};

export class DirectoryApp extends React.PureComponent<DirectoryProps, null> {
  constructor(props: DirectoryProps) {
    super(props);
    (this: any).openNotebook = this.openNotebook.bind(this);
  }

  openNotebook(ks: KernelspecRecord | KernelspecProps) {
    openNotebook(this.props.host, ks, {
      appVersion: this.props.appVersion,
      // Since we're looking at a directory, the base dir is the directory we are in
      baseDir: this.props.content.filepath,
      appPath: this.props.host.basePath
    });
  }

  render() {
    const atRoot = this.props.content.filepath === "/";

    const dotdothref = urljoin(
      this.props.host.basePath,
      "/nteract/edit/",
      urljoin(this.props.content.filepath, "..")
    );
    const basePath = this.props.host.basePath;
    const dotdotlink = <a href={dotdothref}>{".."}</a>;
    return (
      <React.Fragment>
        <Nav>
          <NavSection>
            <a
              href={urljoin(this.props.host.basePath, "/nteract/edit")}
              title="Home"
            >
              <ThemedLogo />
            </a>
            <span>{this.props.content.filepath.split("/").pop()}</span>
          </NavSection>
        </Nav>
        <NewNotebookNavigation onClick={this.openNotebook} />
        <div className="jext-listing-root">
          <Listing>
            {atRoot ? null : (
              // TODO: Create a contentRef for `..`, even though it's a placeholder
              // When we're not at the root of the tree, show `..`
              <Entry>
                <Entry.Icon fileType={"directory"} />
                <Entry.Name>{dotdotlink}</Entry.Name>
              </Entry>
            )}
            {this.props.contents.map((entry, index) => {
              const link = (
                <a
                  href={urljoin(basePath, "/nteract/edit/", entry.path)}
                  // When it's a notebook, we open a new tab
                  target={entry.type === "notebook" ? "_blank" : undefined}
                >
                  {entry.name}
                </a>
              );
              return (
                <Entry key={index}>
                  <Entry.Icon fileType={entry.type} />
                  <Entry.Name>{link}</Entry.Name>
                  <Entry.LastSaved last_modified={entry.last_modified} />
                </Entry>
              );
            })}
          </Listing>
        </div>
        <style jsx>{`
          .jext-listing-root {
            margin-top: 2rem;
            padding-left: 2rem;
            padding-right: 2rem;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

const mapStateToDirectoryProps = (
  state: AppState,
  ownProps: { contentRef: ContentRef }
): DirectoryProps => {
  const host = selectors.currentHost(state);
  const content = selectors.content(state, ownProps);

  if (host.type !== "jupyter") {
    throw new Error("This component only works with jupyter servers");
  }

  if (!content || content.type !== "directory") {
    throw new Error(
      "The directory component should only be used with directory contents"
    );
  }

  let contents = [];
  content.model.items.map(x => {
    const row = selectors.content(state, { contentRef: x });
    if (!row) {
      return {
        last_modified: new Date(),
        name: "",
        path: "",
        type: ""
      };
    }

    if (row.type !== "dummy") {
      return null;
    }

    contents.push({
      last_modified: row.lastSaved,
      name: row.filepath,
      path: row.filepath,
      type: row.assumedType
    });
  });

  return {
    appVersion: selectors.appVersion(state),
    content,
    host,
    contents
  };
};

export const ConnectedDirectory = connect(mapStateToDirectoryProps)(
  DirectoryApp
);

export default ConnectedDirectory;
