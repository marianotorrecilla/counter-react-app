import { useReducer }  from "react"
import "./Counter.css"


function init(initialCount) {
    return {count: initialCount};
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({initialCount}) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <>
            <div className="counter-back">
                <button
                    onClick={() => dispatch({type: 'reset', payload: initialCount})} className="reset-button">
                    Reset
                </button>
                <button onClick={() => dispatch({type: 'decrement'})} className="action-button">-</button>
                Count: {state.count}
                <button onClick={() => dispatch({type: 'increment'})} className="action-button">+</button>
            </div>
        </>
    );
}

export default Counter;
