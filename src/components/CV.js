import React from 'react'
import Navbar from './Navbar';
import Profil from './Profil';
import Umiejetnosci from './Umiejetnosci';
import Doswiadczenie from './Doswiadczenie';
import Wyksztalcenie from './Wyksztalcenie';
import Portfolio from './Portfolio'
import OMnie from './OMnie'
import DodatkoweUmiejetnosci from './DodatkoweUmiejetnosci';

export default class CV extends React.Component{
    render() {
        return (
            <section>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m4 13'>
                            <Profil />
                        </div>
                        <div className='col s12 m8 19'>
                            <OMnie/>
                            <Wyksztalcenie />
                            <Doswiadczenie />
                            <Umiejetnosci />
                            <Portfolio />
                            <DodatkoweUmiejetnosci/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
