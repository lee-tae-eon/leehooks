# @leehooks/use-tabs

React Hook to show the select Tab

---

## Example

```
import {useTabs} from "@leehooks/use-tabs"

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <Container className="App" style={{ height: "1000vh" }}>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      {<div>{currentItem.desc}</div>}
    </Container>
  );
}
```
