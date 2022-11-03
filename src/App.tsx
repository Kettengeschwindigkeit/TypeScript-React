import React from "react"
import Counter from "./components/Counter"
import { Title } from "./components/Title";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Title title="test" />
      <Counter title="Counter: " />
    </div>
  )
}

export default App;
