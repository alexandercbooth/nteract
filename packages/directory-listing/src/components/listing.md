```jsx static
import { Entry, Listing } from "@nteract/directory-listing"
```
This component is used to create a directory listing. It is meant to be the parent to the Entry component. It will render a styled table of directory entries. 

```jsx
const { Entry, Listing } = require("../");
const nb = (
    <a href={"#listing"}>{"GANS-for-days.ipynb"}</a>
    );
    
const mydir = (
    <a href={"#listing"}>{"home"}</a>
    );

const greatfile = (
    <a href={"#listing"}>{"component.js"}</a>
    );
 <Listing>
    <Entry key={0}>
        <Entry.Icon fileType={"notebook"} />
        <Entry.Name>{nb}</Entry.Name>
        <Entry.LastSaved last_modified={"2018-06-27T16:21:25.354Z"} />
    </Entry>

    <Entry key={1}>
        <Entry.Icon fileType={"directory"} />
        <Entry.Name>{mydir}</Entry.Name>
        <Entry.LastSaved last_modified={"2018-03-27T16:21:25.354Z"} />
    </Entry>

    <Entry key={2}>
        <Entry.Icon fileType={"file"} />
        <Entry.Name>{greatfile}</Entry.Name>
        <Entry.LastSaved last_modified={"2018-05-27T16:21:25.354Z"} />
    </Entry>
</Listing>
```