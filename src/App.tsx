import React from "react"

// const Title: React.FC<{ title: string }> = ({ title, children }) => <h1>{title}</h1>

// const Title: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>

type TitleTypes = {
  title: string,
  test?: string
}

const Title = ({ title, test = "test" }: TitleTypes) => <h1>{title}{test}</h1>

const App: React.FunctionComponent = () => <Title title="test" />

export default App;
