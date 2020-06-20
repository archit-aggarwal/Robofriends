import React from 'react';
import 'tachyons'
// props = parameters/parameters in ES6 Javascript
// props have been destructered right away in parameters
const Card = ({id,name,email}) => {
    return (
      <div className="bg-light-green dib br3 pa3  ma2 grow bw2 shadow-5 tc">
          {/*src has template strings (refer to ES6 Javascript) with back ticks*/}
          <img alt ="robots" src ={`https://robohash.org/${id}?200x200`} />
          <div>
              <h1>{name}</h1>
              <p>{email}</p>
          </div>
      </div>
    );
}
export default Card;