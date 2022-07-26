import React from 'react';
import ListItem from './../ListItem/ListItem'
const arr = [1,2,3,4]

const num = 5;
const ListWrapper = () => (
  <>
    <ul>
    
   {arr.map(elem => <ListItem iter={elem}/>)}
    
      </ul>
  </>
)
export default ListWrapper