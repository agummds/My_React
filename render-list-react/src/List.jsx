
function List(){
    const fruits = ["appe", "mangga", "pisang", "pepaya"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return (<ol>{listItems}</ol>);

}

export default List