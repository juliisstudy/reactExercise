import DessertsList from "./DessertsList"
const desserts =[
{
    name:"Cake",
    calories:400,
    data:"2024-09-01",
},
{
    name:"Ice cream",
    calories:300,
    data:"2024-09-01",
},
{
    name:"Tiramisu",
    calories:200,
    data:"2024-09-01",
},

]

function DessertsApp (){
    return (
        <DessertsList data={desserts}/>
    )
}

export default DessertsApp