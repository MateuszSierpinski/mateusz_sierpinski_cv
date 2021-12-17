import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                <div className='card-content'>
                    <h6><strong>PORTFOLIO</strong></h6>
                    <table className='striped'>
                        <thead>
                            <tr>
                                <th>Nazwa Projektu</th>
                                <th>Data</th>
                                <th>Link do projektu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Malform Checker</td>
                                <td>2019</td>
                                <td><a href= "https://github.com/MateuszSierpinski/Malform-Checker" className='btn blue lighten-2'>Sprawdz</a></td>
                            </tr>
                            <tr>
                                <td>Quality Check Program</td>
                                <td>2020</td>
                                <td><a href= "https://github.com/MateuszSierpinski/QC" className='btn blue lighten-2'>Sprawdz</a></td>
                            </tr>
                            <tr>
                                <td>Moje CV (React)</td>
                                <td>2020</td>
                                <td><a href= "https://github.com/MateuszSierpinski/QC" className='btn blue lighten-2'>Sprawdz</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>                  
            </div>
        </div>
        )
    }
}
