// @flow

/*
 * Functions in this module are provided for converting from Jupyter Notebook
 * Format v4 to nteract's in-memory format, affectionately referred to as
 * commutable.
 *
 * See: https://github.com/jupyter/nbformat/blob/62d6eb8803616d198eaa2024604d1fe923f2a7b3/nbformat/v4/nbformat.v4.schema.json
 *
 * The main goal here is consistency and compliance with the v4 spec. The types
 * contained in here (non Immutable ones) are constrained to the disk based
 * notebook format.
 *
 * To assist in the developer experience, types are included through the use of
 * flow.
 *
 */

import type { NbformatCell } from "./cells";

import type { NbformatOutput } from "./outputs";

import type {
  ImmutableNotebook,
  ImmutableCodeCell,
  ImmutableMarkdownCell,
  ImmutableRawCell,
  ImmutableCell,
  ImmutableOutput,
  ImmutableMimeBundle
} from "./types";

import type { CellStructure } from "./structures";

const appendCell = require("./structures").appendCell;
