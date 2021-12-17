import React, { Component } from 'react'

export default class Umiejetnosci extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6>
                            <strong> ZDOLNOŚCI </strong>
                        </h6>
                        <div className='row mt-top'>
                            <div className='col s6'>
                              <p> C# .NET 4.8 (WPF, UWP, Xamarin, MVC) </p>  
                              <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'40%'}}/>                                
                              </div>
                            </div>
                            <div className='col s6'>
                              <p> Groovy (Spectrum: Enterprise Designer) </p>  
                              <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'70%'}}/>                                
                              </div>
                            </div>
                            <div className='col s6'>
                              <p> JavaScript, CSS, HTML (React, Angular, jQuery) </p>  
                              <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'40%'}}/>                                
                              </div>
                            </div>
                            <div className='col s6'>
                              <p> SQL (Oracle SQL, MS SQL Server, MySQL) </p>  
                              <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'40%'}}/>                                
                              </div>
                            </div>
                            <div className='col s6'>
                              <p> Python (Django, Pandas, NumPy, Jupyter) </p>  
                              <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'40%'}}/>                                
                              </div>
                            </div>
                            <div className='col s6'>
                              <p> Pakiet Microsoft Office (Word, Excel, Access, Powerpoint) </p>  
                              <div className='progress grey lighten-1'>
                                <div className='determinate blue' style={{width:'70%'}}/>                                
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
