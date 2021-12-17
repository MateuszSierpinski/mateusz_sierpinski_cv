import React, { Component } from 'react'

export default class Doswiadczenie extends Component {
    render() {
        return (
            <div className='card'>
              <div className='card-content'>
                <h6 className='mt-bottom'><strong>DOŚWIADCZENIE</strong></h6>
                <div className='row'>
                    <div className='col s12 m4 l4 xl4'>
                        <p className='teal yearexp white-text'>
                            <strong>01.08.2018 – obecnie</strong>
                        </p>
                    </div>
                    <div className='col s12 m8 l8 xl8'>
                        <blockquote className='no-pad'>
                            <h6 className='no-pad mt-bottom'>
                                <strong>Programista Data Processing</strong>
                            </h6>
                            <p className='pochyle_fonty'>Quad IT Global Solutions</p>
                            <ul>
                                <li>{'\u2022'}  Dostosowanie danych klienta do standardów poczty amerykańskiej (USPS - United States Postal Service)</li>
                                <li>{'\u2022'}  Przetwarzanie baz danych dostarczonych przez klientów w oprogramowaniu Pitney Bowes używając języka Groovy</li>
                                <li>{'\u2022'}  Stworzenie aplikacji w WPF które poprawiaja wydajność i redukują ilość błedów w naszym dziale</li>
                                <li>{'\u2022'}  Praca w międzynarodowym środowisku</li>
                                <li>{'\u2022'}  Tooling: Groovy, Enterprise Designer Spectrum, Python 2.7, Bash 4.2.46</li>
                            </ul>
                        </blockquote>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 m4 l4 xl4'>
                        <p className='teal yearexp white-text'>
                            <strong>01.02.2018 - 31.07.2018</strong>
                        </p>
                    </div>
                    <div className='col s12 m8 l8 xl8'>
                        <blockquote className='no-pad'>
                            <h6 className='no-pad mt-bottom'>
                                <strong>Direct Mailing System Specialist</strong>
                            </h6>
                            <p className='pochyle_fonty'>Poczta Polska</p>
                            <ul>
                                <li>{'\u2022'}  Przetwarzanie baz danych dostarczonych prze klientów i wydruk na drukarkach przemysłowych</li>
                                <li>{'\u2022'}  Tooling: Microsoft Word Mail Merge, Excel</li>
                            </ul>
                        </blockquote>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 m4 l4 xl4'>
                        <p className='teal yearexp white-text'>
                            <strong>01.12.2016 - 01.02.2018</strong>
                        </p>
                    </div>
                    <div className='col s12 m8 l8 xl8'>
                        <blockquote className='no-pad'>
                            <h6 className='no-pad mt-bottom'>
                                <strong>Listonosz</strong>
                            </h6>
                            <p className='pochyle_fonty'>Poczta Polska</p>
                            <ul>
                                <li>{'\u2022'}  Przygotowanie korespondencji do doręczenia</li>
                                <li>{'\u2022'}  Doręczanie korespondencji i przekazów pieniężnych</li>
                                <li>{'\u2022'}  Realizacja planów sprzedażowych dotyczących wybranych usług i towarów</li>
                                <li>{'\u2022'}  Praca z ludźmi, z wykorzystaniem nowoczesnych narzędzi.</li>
                            </ul>
                        </blockquote>
                    </div>
                </div>
              </div>  
            </div>
        )
    }
}
