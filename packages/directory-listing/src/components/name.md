```jsx static
import { Name } from "@nteract/directory-listing"
```
Display a name and link to file
```jsx
const { Name } = require("../");
const link = (
                <a href={"#name"}>
                  {"Example-Notebook.ipynb"}
                </a>
              );
    <Name>{link}</Name>

```