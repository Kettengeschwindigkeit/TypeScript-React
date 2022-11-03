import React from "react"
import Counter from "./components/Counter"
import { Form } from "./components/Form";
import { Title } from "./components/Title";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Title title="test" />
      <Counter title="Counter: " />
      <Form />
    </div>
  )
}

export default App;
