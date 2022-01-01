import List from "./List";
import { useState } from "react";

const Home = () => {
    const [groceries, setGroceries] = useState([
        { value: "eggs", id: 1 },
        { value: "bread", id: 2 },
        { value: "coffee", id: 3 }])

    const handleDelete = (id) => {
        const newGroceries = groceries.filter(item => item.id !== id)
        setGroceries(newGroceries)
    }

    return (
        <div>
            <List groceries={groceries} handleDelete={handleDelete} />
        </div>
    );
}

export default Home;