import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ( {
  image,
  name, 
  description, 
  twitterLink
} )=> (
  <>
    <li>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <a href={twitterLink}>Go to Twitter account</a>
      </div>
    </li>
  </>
);

ListItem.prototype = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  twitterLink: PropTypes.string
}


export default ListItem;
