import React from 'react';
import ListItem from './../ListItem/ListItem'
import {twitterAccounts} from '../../data/twitterAccounts'

const num = 5;
const ListWrapper = () => (
  <>
    <ul>
    {}
   {twitterAccounts.map(elem => <ListItem {...elem}/>)}
    
      </ul>
  </>
)
export default ListWrapper