import React, { Component } from 'react'

export default class Wyksztalcenie extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-content'>
                    <h6><strong>WYKSZTAŁCENIE</strong></h6>
                    <table className='striped'>
                        <thead>
                            <tr>
                                <th>Placówka naukowa</th>
                                <th>Data rozpoczęcia</th>
                                <th>Data ukończenia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>                           
                                    <ul>
                                        <li>Uniwersytet im. Kazimierza Wielkiego w Bydgoszczy</li>
                                        <li className='pochyle_fonty'>Informatyka - ROK IV (studia zaoczne)</li>
                                    </ul>
                                </td>
                                <td>2018</td>
                                <td>obecnie</td>
                            </tr>
                            <tr>
                                <td>                                    
                                    <ul>
                                        <li>Liceum Ogólnokształcące im. Marii Curie Skłodowskiej w Pile</li>
                                        <li className='pochyle_fonty'>Profil: Matematyczno-Informatyczny</li>
                                    </ul>
                                </td>
                                <td>2009</td>
                                <td>2012</td>
                            </tr>
                        </tbody>
                    </table>
                </div>   
                
            </div>
        )
    }
}
