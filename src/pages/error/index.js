import React from 'react';
import {Link} from 'react-router';

export default class ErrorPages extends React.Component {


    render() {
        return (
          <div className='errors'>
              <h1>Pages Not Found</h1>
              <h4>Go To <Link to='/'>Home</Link></h4>
          </div>
        );
    }
}
