import React, { Component } from 'react'

export default class DodatkoweUmiejetnosci extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                    <div className='row mt-top'>
                        <div className='col s6'>
                            <h6><strong>DODATKOWE UMIEJETNOSCI</strong></h6>
                                <ul>
                                    <li>{'\u2022'} Prawo jazdy kat. B</li>
                                    <li>{'\u2022'} Dokładnosć</li>
                                    <li>{'\u2022'} Szybkie przyswajanie wiedzy</li>
                                    <li>{'\u2022'} Zdolność do pracy zespołowej</li>
                                    <li>{'\u2022'} Umiejetnosc pracy pod presją czasu</li>
                                </ul>
                        </div>
                        <div className='col s6'>
                            <h6> <strong>HOBBY</strong></h6>
                                <ul>
                                    <li>{'\u2022'} Informatyka i nowe technologie</li>
                                    <li>{'\u2022'} Muzyka</li>
                                    <li>{'\u2022'} Piłka nożna</li>
                                    <li>{'\u2022'} Filmy i Seriale</li>
                                    <li>{'\u2022'} Gry komputerowe</li>
                                </ul>
                        </div>
                        </div>                         
                    </div>
                </div>
            </div>  
        )
    }
}
