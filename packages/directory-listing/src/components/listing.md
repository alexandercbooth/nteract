```jsx static
import { Entry, Listing, Icon, Name, LastSaved } from "@nteract/directory-listing"
```
This component is used to create a directory listing. It is meant to be the parent to the Entry component. It will render a styled table of directory entries. 

```jsx
const { Entry, Listing, Icon, Name, LastSaved } = require("../");
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
        <Icon fileType={"notebook"} />
        <Name>{nb}</Name>
        <LastSaved last_modified={"2018-06-27T16:21:25.354Z"} />
    </Entry>

    <Entry key={1}>
        <Icon fileType={"directory"} />
        <Name>{mydir}</Name>
        <LastSaved last_modified={"2018-03-27T16:21:25.354Z"} />
    </Entry>

    <Entry key={2}>
        <Icon fileType={"file"} />
        <Name>{greatfile}</Name>
        <LastSaved last_modified={"2018-05-27T16:21:25.354Z"} />
    </Entry>
</Listing>
```