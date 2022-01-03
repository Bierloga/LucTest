import ListItem from "./ListItem";

const List = (props) => {
    const groceries = props.groceries
    return (
        <div>
            {groceries.map((item) => {
                return (
                    <div key={item.id}>
                        <ListItem
                            key={item.id}
                            id={item.id}
                            value={item.value}
                            handleDelete={props.handleDelete}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default List;