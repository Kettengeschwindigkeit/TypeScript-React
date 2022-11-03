
// const Title: React.FC<{ title: string }> = ({ title, children }) => <h1>{title}</h1>
// const Title: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>

type TitleTypes = {
    title: string,
    test?: string
}

export const Title = ({ title, test = "test" }: TitleTypes) => <h1>{title} {test}</h1>
