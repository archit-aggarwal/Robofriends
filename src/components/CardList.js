import React from 'react';
import Card from './Card'; // Card by default is Card.js
// ./ means in same directory/folder
// import robots from './robots';
const CardList = ({robots}) => {
    const CardComponent = robots.map((user,i) => {
        return (
         <Card 
          key={i} 
          id={robots[i].id} 
          name={robots[i].name} 
          email={robots[i].email}
         />
        );
    })
    return (
    <div>
     {CardComponent}
    </div>
    );
}
export default CardList;