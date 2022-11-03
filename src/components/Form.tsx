import { Component } from "react"

export class Form extends Component<{}, {}> {

    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log('Coppied!')
    }

    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget)
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Submitted!')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Simple text:
                    <input type="text" name="text" onFocus={this.handleFocus} onCopy={this.handleCopy} />
                    <button type="submit">Submit</button>
                </label>
            </form>
        )
    }
}
