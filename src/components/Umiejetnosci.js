import React from 'react'
import { useTranslation } from 'react-i18next'


export default function Umiejetnosci() {
  const { t } = useTranslation()
  return (
    <div>
      <div className='card'>
        <div className='card-content'>
          <h6>
            <strong>{t('tytul_umiejetnosci')}</strong>
          </h6>
          <div className='row'>
            <div className='col'>
              <p> C# .NET 6.0 (WPF, Xamarin, MVC, Rest API, Windows Services, Dapper, Entity Framework) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '64%' }} />
              </div>
            </div>
            <div className='col'>
              <p> Groovy (Spectrum: Enterprise Designer) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '78%' }} />
              </div>
            </div>
            <div className="w-100"></div>
            <div className='col'>
              <p> JavaScript, CSS, HTML (React, jQuery) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '50%' }} />
              </div>
            </div>
            <div className='col'>
              <p> SQL (Oracle SQL, MS SQL Server, MySQL, OpenEdge SQL, PostgreSQL, SQLite) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '58%' }} />
              </div>
            </div>
            <div className="w-100"></div>
            <div className='col'>
              <p> Python (Django, Pandas, NumPy, Jupyter) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '57%' }} />
              </div>
            </div>
            <div className='col s6'>
              <p> Microservices (Rest API, gRPC, ActiveMQ, Docker, Kubernetes, Polly, Steeltoe ) </p>
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
