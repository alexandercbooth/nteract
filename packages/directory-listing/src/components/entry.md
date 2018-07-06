```jsx static
import { Entry } from "@nteract/directory-listing"
```
This component is used to create individual entries in a directory. It is not meant to be used alone, but rather as children of the Listing component and renders children of it's own. In nteract, we use it as the parent of Icon, Name and LastSaved components.



Display an Icon, Name, and time since last saved of an entry in a directory.
```jsx
const { Entry, Icon, Name, LastSaved } = require("../");
const link = (
                <a href={"http://nteract.io"}>
                  {"Example-Notebook.ipynb"}
                </a>
              );
<Entry key={0}>
    <Icon fileType={"notebook"} />
    <Name>{link}</Name>
    <LastSaved last_modified={new Date()} />
</Entry>
```