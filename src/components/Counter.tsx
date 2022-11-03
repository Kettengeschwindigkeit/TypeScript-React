import { Component } from "react"

type CounterState = {
    count: number
}

type CounterProps = {
    title?: string
}

// class Counter extends Component<{}, { count: number }> {

class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props)
    }

    state = {
        count: 0
    }

    static defaultProps: CounterProps = {
        title: "Default counter: "
    }

    static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
        return true ? { count: 2 } : null
    }

    componentDidMount(): void {
        
    }

    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
        return true
    }

    // handleClick = (e: React.SyntheticEvent) => {
    handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        console.log(`${e.clientX}, ${e.clientY}`)
        this.setState(({ count }) => ({
            count: ++count
        }))
    }

    render() {
        // this.props.title = ''                                                                                  // ERROR! Cannot assign to 'title' because it is a read-only property
        
        return (
            <div>
                <h1>{this.props.title}{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
                <a href="#" onClick={this.handleClick}></a>
            </div>
        )
    }
}

export default Counter
