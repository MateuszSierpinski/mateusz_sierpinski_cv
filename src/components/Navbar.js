import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
    render() {
        return (
            <>
            <nav className='light-blue darken-4'>
                <div className='container'>
                    <div className='nav-wrapper'>
                        <Link to='/' data-target='side-nav' className='sidenav-trigger'>
                            <i className='material-icons'>menu</i>
                        </Link>
                        <ul className='right hide-on-med-and-down'>
                            <li>
                                <Link to='/'>
                                    <i className='fas fa-home'></i> Strona Domowa
                                </Link>
                            </li>
                            <li>
                                <Link to='/umiejetnosci'>
                                    <i className='fas fa-copy'></i> Umiejętności
                                </Link>
                            </li>
                            <li>
                                <Link to='/doswiadczenie'>
                                    <i className='fas fa-id-badge'></i> Doświadczenie
                                </Link>
                            </li>
                            <li>
                                <Link to='/wyksztalcenie'>
                                    <i className='fas fa-graduation-cap'></i> Wykształcenie
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <i className='fas fa-address-card'></i> Porfolio
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className='sidenav' id='side-nav'>
                            <li>
                                <Link to='/'>
                                    <i className='fas fa-home'></i> Strona Domowa
                                </Link>
                            </li>
                            <li>
                                <Link to='/umiejetnosci'>
                                    <i className='fas fa-copy'></i> Umiejętności
                                </Link>
                            </li>
                            <li>
                                <Link to='/doswiadczenie'>
                                    <i className='fas fa-id-badge'></i> Doświadczenie
                                </Link>
                            </li>
                            <li>
                                <Link to='/wyksztalcenie'>
                                    <i className='fas fa-graduation-cap'></i> Wykształcenie
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <i className='fas fa-address-card'></i> Porfolio
                                </Link>
                            </li>
                        </ul>
        </>       
        )
    }
}
