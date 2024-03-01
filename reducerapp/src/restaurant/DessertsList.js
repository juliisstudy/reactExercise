function DessertsList (props){
    const lowCaloriesDesserts = props.data
    .filter(desserts=>{
        return desserts.calories <500
    })
    .sort((a,b)=>{
        return a.calories-b.calories
    })
    .map((desserts)=>{
        return (
            <li>{desserts.name} - {desserts.calories}cal</li>
        )
    })
    return <ul>{lowCaloriesDesserts}</ul>
}
export default DessertsList