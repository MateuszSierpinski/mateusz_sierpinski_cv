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
              <p> C# .NET 4.8 (WPF, UWP, Xamarin, MVC) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '40%' }} />
              </div>
            </div>
            <div className='col'>
              <p> Groovy (Spectrum: Enterprise Designer) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '70%' }} />
              </div>
            </div>
            <div className="w-100"></div>
            <div className='col'>
              <p> JavaScript, CSS, HTML (React, Angular, jQuery) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '40%' }} />
              </div>
            </div>
            <div className='col'>
              <p> SQL (Oracle SQL, MS SQL Server, MySQL) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '40%' }} />
              </div>
            </div>
            <div className="w-100"></div>
            <div className='col'>
              <p> Python (Django, Pandas, NumPy, Jupyter) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '40%' }} />
              </div>
            </div>
            <div className='col s6'>
              <p> Pakiet Microsoft Office (Word, Excel, Access, Powerpoint) </p>
              <div className='progress grey lighten-1'>
                <div className='determinate blue' style={{ width: '70%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
