function App() {
    const [displayCounter, setDisplayCounter] = React.useState(true)
    return (
        <div className="app">
            <button style={{backgroundColor: 'var(--main-color)', color: 'white'}} onClick={() => setDisplayCounter(prevDisplayCounter => !prevDisplayCounter)}> {displayCounter ? 'Hide' : 'Show'} Counter</button>
            {displayCounter && <Counter />}
        </div>
    )
}

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const [taps, setTaps] = React.useState(0)
    const handleDecrement = () => {
        setCount(prevCount => (prevCount > 0) ? (prevCount - 1) : (prevCount))
        setTaps(prevTaps => prevTaps + 1)

    }
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
        setTaps(prevTaps => prevTaps + 1)
    }
    // const handleResetCount = () => {
    //     setCount(0)
    // }
    const handleResetAll = () => {
        setCount(0)
        setTaps(0)
    }
    return (
        <div className="counter">
            <h1>Counter</h1>
            <h2 className="count">{count}</h2>
            <h4 className="taps">Total taps: {taps}</h4>
            <div>
                <button onClick={handleDecrement}>Decrement -</button>
                <button onClick={handleIncrement}>Increment +</button>
            </div>
            <div>
                <button className="reset-count" onClick={() => setCount(0)}>Reset Count</button>
                <button className="reset-all" onClick={handleResetAll}>Reset All</button>
            </div>
        </div>
    )
}
class CounterClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            taps: 0
        }
    }
    handleIncrement = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
            taps: prevState.taps + 1
        }))
    }
    handleDecrement = () => {
        this.setState(prevState => ({
            count: (prevState.count === 0) ? (prevState.count) : (prevState.count - 1),
            taps: prevState.taps + 1
        }))
    }
    handleResetCount = () => {
        this.setState({ count: 0 })
    }
    handleResetAll = () => {
        this.setState({ count: 0, taps: 0 })
    }
    render() {
        return (
            <div className="counter">
                <h1>Counter</h1>
                <h2 className="count">{this.state.count}</h2>
                <h4 className="taps">Total taps: {this.state.taps}</h4>
                <div>
                    <button onClick={this.handleDecrement}>Decrement -</button>
                    <button onClick={this.handleIncrement}>Increment +</button>
                </div>
                <div>
                    <button className="reset-count" onClick={this.handleResetCount}>Reset Count</button>
                    <button className="reset-all" onClick={this.handleResetAll}>Reset All</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))