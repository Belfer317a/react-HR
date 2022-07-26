import React from 'react';

const ListItem = (props) =>(
  <>
    <li>
      <figure><img src={props.image} alt={props.name}/></figure>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <a href={props.twitterLink}>Go to Twitter account</a>
    </li>
  </>
)
export default ListItem;