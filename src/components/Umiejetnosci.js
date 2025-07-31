import React from 'react'
import { useTranslation } from 'react-i18next'
import GroovyLogo from '../loga/Groovy-logo.png';
import DotNetLogo from '../loga/DotNET_logo.png';
import JavaScriptLogo from '../loga/JavaScript_logo.png';
import PythonLogo from '../loga/Python_logo.png';
import SQLLogo from '../loga/SQL_logo.png';
import MicroservicesLogo from '../loga/Microservices_logo.png';


export default function Umiejetnosci() {
  const { t } = useTranslation()
  return (
    <div>
      <div className='card'>
        <div className='card-content'>
          <h6 style={{ marginBottom: '20px'}}>
            <strong>{t('tytul_umiejetnosci')}</strong>
          </h6>
          <div className='row'>
            <div className='col'>
              <p>
                <img src={DotNetLogo}  height="35" style={{ marginRight: '10px' }} alt='NetLogo' />
                .NET 8.0 (WPF, MVC, Rest API, Windows Services, Entity Framework, Blazor)
              </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '75%' }} />
              </div>
            </div>
            <div className='col'>              
              <p>
                <img src={GroovyLogo} height="35" style={{ marginRight: '10px' }} alt='GrvLogo' />
                Groovy (Spectrum: Enterprise Designer) 
              </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '70%' }} />
              </div>
            </div>
            <div className="w-100"></div>
            <div className='col'>
              <p>
                <img src={JavaScriptLogo} height="35" style={{ marginRight: '10px' }}  alt='JsLogo'/>  
                JavaScript, CSS, HTML, React, jQuery 
              </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '60%' }} />
              </div>
            </div>
            <div className='col'>
              <p> 
                <img src={SQLLogo} height="35" style={{ marginRight: '10px' }} alt='SqlLogo'/>
                SQL (Oracle SQL, MS SQL Server, OpenEdge SQL, PostgreSQL) 
              </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '58%' }} />
              </div>
            </div>
            <div className="w-100"></div>
            <div className='col'>
              <p> 
                <img src={PythonLogo} height="35" style={{ marginRight: '10px' }} alt='PyLogo' />  
                Python (Django, Pandas, NumPy, Jupyter) 
              </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '57%' }} />
              </div>
            </div>
            <div className='col s6'>
              <p> 
                <img src={MicroservicesLogo} height="35" style={{ marginRight: '10px' }}  alt='MicLogo'/>  
                Microservices (Rest API, gRPC, ActiveMQ, Docker, Kubernetes)
              </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '30%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
