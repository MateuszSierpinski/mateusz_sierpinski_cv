import React from 'react'
import Umiejetnosci from './Umiejetnosci';
import Doswiadczenie from './Doswiadczenie';
import Wyksztalcenie from './Wyksztalcenie';
import Portfolio from './Portfolio'
import OMnie from './OMnie'
import DodatkoweUmiejetnosci from './DodatkoweUmiejetnosci';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

export default class CV extends React.Component {
    render() {
        return (
            <section>
                <div className='container' >
                    <div className='row'>
                        <div className='col s12' id='CV'>
                            <OMnie />
                            <Wyksztalcenie />
                            <Doswiadczenie />
                            <Umiejetnosci />
                            <Portfolio />
                            <DodatkoweUmiejetnosci />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
