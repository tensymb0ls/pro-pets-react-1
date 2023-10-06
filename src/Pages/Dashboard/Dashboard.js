import { useState } from "react"
import { useEffect } from "react"

export const Dashboard = () => {

    //  state hook
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState('Default');
    const [toDo, setToDo] = useState([{ text: 'Buy beer' }]);
    const HandleClickElement = () => {
        setCount(count+1);
    }
    //  effect hook
    useEffect(() => {
        alert('Component mount');
    }, [count]);
    return <div>
        <p>counter {count}</p>
        <p>{products}</p>
        <ul>
            {toDo.map(item => <li key={item.text}>{item.text}</li>)}
        </ul>
        <button onClick={HandleClickElement}>Click me</button>

    </div>
} 