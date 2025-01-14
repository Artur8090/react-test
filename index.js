
function Counter() {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increase</button>
        </div>
    );
}
ReactDOM.render(<Counter />, document.getElementById('root'));
