import React, { Component } from 'react'

export default class OMnie extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    {/* <div className='card-content'>
                        <h6 className='mt-bottom'>
                            <strong>O MNIE</strong>
                        </h6>
                        <p className='grey-text'>
                            Blajhasdjhjashkdjahkjdfkghf
                            safhdjfsahkjfsdhgfdkjhgkjhgfdskj
                            dsakdsfakjfsgajkhfgakjfgakjjhaghkjfgd
                            dsjhsdhjksghjkgsjkhfgskhjfgshkjdsfgkjh
                        </p>
                    </div> */}
                    <div className='card-action'>
                        <h6 className='mt-bottom'>
                            <strong>INFORMACJE PERSONALNE</strong>
                        </h6>
                        <div className='col s12 m6 16 x16'>
                            <p><strong>Data urodzenia: </strong> 05.12.1993 </p>
                            <p><strong>Adres: </strong> Dolna 14, Piła, 64-920, Polska </p>
                            <p><strong>E-mail: </strong> mateuszsierpinski19@gmail.com </p>
                            <p><strong>Telefon: </strong> +48 512753831 </p>
                        </div>
                        <div className='s12 m6 16 x16'>
                            <p><strong>Języki:</strong></p>
                            <p> - Polski (Ojczysty)</p>
                            <p> - Angielski (B2) </p>
                            <p> - Niemiecki (telc Deutsch B1 Zertifikat) </p>                            
                        </div>
                    </div>
                 </div>   
            </div>
        )
    }
}
