const ListItem = (props) => {
    const value = props.value
    const id = props.id
    console.log(props.handleDelete)
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => props.handleDelete(id)}>Remove {value}!</button>
        </div>
    );
}

export default ListItem;