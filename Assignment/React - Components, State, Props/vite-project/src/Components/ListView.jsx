import React from 'react'

const ListView = () => {
    const data = [
        {id: 1, city: "Ahmedabad", population: 1256302},
        {id: 2, city: "Jamnagar", population: 563954},
        {id: 3, city: "Rajkot", population: 652269},
        {id: 4, city: "Surat", population: 523698},
        {id: 5, city: "Mehsana", population: 963258},
      ];
  return (
    <div className='listMain'>
        <ul>
            <li>To render a list first of we need to import data or create a Data Object inside List Component</li>
            <li>After Importing or Creating data, apply map in that Data Object and retrive all data </li>
            <li>Give unique key to each data</li>
            <li>Using map is more preferable the using loops</li>
            <li>Here is the example of list view in react js</li>
            
        </ul>

        <h1>The Population Data for different Cities</h1>
        <ul>
            {data.map((list => {
                return(
                    <li key={list.id}> Total population in city of {list.city} is about {list.population} </li>
                )
            }))}
        </ul>
    </div>
  )
}

export default ListView