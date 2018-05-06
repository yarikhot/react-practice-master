import React from 'react';
import {Link} from 'react-router';
import {Logo} from './logo.svg';

export default class Header extends React.Component {

    static path = '/';
    render() {
        return (
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className=' col-12'>
                            <div className='logo'>
                                <img src={Logo} className='App-logo' alt='logo' />
                            </div>
                            <nav>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                    <li><Link to='/price'>Price</Link></li>
                                    <li><Link to='/list'>List</Link></li>
                                    <li><Link to='/faq'>FaQ</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
