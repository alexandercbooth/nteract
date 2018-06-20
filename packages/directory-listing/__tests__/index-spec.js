// @flow
import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Entry } from "../src";
import Listing from "../src";

describe("Listing", () => {
  it("accepts props and renders entries in directory in a table", () => {
    const component = (
      <Listing>
        <Entry>
          <Entry.Icon fileType={"directory"} />
          <Entry.Name link={"linky"} />
          <Entry.LastSaved
            last_modified={
              "Fri Jun 22 2018 00:15:55 GMT-0400 (Eastern Daylight Time)"
            }
          />
        </Entry>
      </Listing>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});

describe("Entry", () => {
  it("accepts props and renders entries in directory", () => {
    const component = shallow(
      <Entry>
        <Entry.Icon fileType={"directory"} />
        <Entry.Name link={"linky jr"} />
        <Entry.LastSaved
          last_modified={
            "Fri Jun 22 2018 00:15:55 GMT-0400 (Eastern Daylight Time)"
          }
        />
      </Entry>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
