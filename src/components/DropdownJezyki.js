import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useReactToPrint } from 'react-to-print';
import { BsPrinterFill } from 'react-icons/bs';
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import 'flag-icon-css/css/flag-icons.min.css'




const languages = [
  {
    code: 'pl',
    name: 'Polski',
    country_code: 'pl',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'de',
    name: 'Deutsch',
    country_code: 'de',
  },
]

export default function DropdownJezyki() {

  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('app_title');
  }, [currentLanguage, t]);


  
  const handlePrint = useReactToPrint({
      content: () => document.getElementById('pdf-content'),
      documentTitleOptions: {
        orientation: 'portrait', // Orientacja wydruku (domyślnie 'portrait')
        scale: 30} // Skala wydruku w procentach (30%)
    });

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn dropdown"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-cog"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <span className="dropdown-item-text"></span>
          </li>
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <button
                className={classNames('dropdown-item', {
                  disabled: currentLanguageCode === code,
                })}
                onClick={() => {
                  i18next.changeLanguage(code)
                }}
              >
                <span
                  className={`flag-icon flag-icon-${country_code} mx-2`}
                  style={{
                    opacity: currentLanguageCode === code ? 0.5 : 1,
                  }}
                ></span>
                {name}
              </button>
            </li>
          ))}
          <li>
          <button className={classNames('dropdown-item')} 
              onClick={handlePrint}>
              <BsPrinterFill  size={18} style={{ marginLeft: 10 , marginRight: 8 }} />
              <span>Drukuj</span>
            </button>
            </li>
        </ul>
      </div>
    </div>
  )
}
