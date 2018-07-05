```jsx static
import { Entry } from "@nteract/directory-listing"
```
This component is used to create individual entries in a directory. It is not meant to be used alone, but rather as children of the Listing component. It has three compound components: Icon, Name and LastSaved.



Display an Icon
```jsx
const { Entry } = require("../");
<Entry key={0}>
    <Entry.Icon fileType={"notebook"} />
</Entry>
```
_Note: Icon accepts fileType as a prop. This type can be either "notebook", "file" or "directory"._


Display a filename and link
```jsx
const { Entry } = require("../");
const link = (
                <a
                  href={"http://nteract.io"}
                  // When it's a notebook, we open a new tab
                  target={entry.type === "notebook" ? "_blank" : undefined}
                >
                  {"Example-Notebook.ipynb"}
                </a>
              );
<Entry key={0}>
    <Entry.Name>{link}</Entry.Name>
</Entry>
```
_Note: Name accepts children as a prop._


Display the time since save
```jsx
const { Entry } = require("../");
<Entry key={0}>
    <Entry.LastSaved last_modified={new Date()} />
</Entry>
```
_Note: LastSaved accepts last-modified as a prop. This is expected to be a valid date._
