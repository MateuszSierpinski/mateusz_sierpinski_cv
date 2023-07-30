import React from 'react'
import ImgProfile from '../zdjecia/zdjecie1.jpg'
import { useTranslation } from 'react-i18next'
import '../App.css'

export default function OMnie() {
    const { t } = useTranslation()
    return (
        <div>
            <div className='card'>
                <div className='row' style={{margin:0}}>
                    <div className='col-sm-3'>
                        <div className='card-image moje-zdjecie'>
                            <img className='moje-zdjecie' src={ImgProfile} alt='Moje Zdjecie' />
                        </div>
                    </div>
                    <div className='card-content col-sm-9' style={{margin:0}}>
                        <span className='card-title activator gery-text text-darken-4'>
                            <h4 className='imie'><strong>Mateusz Sierpiński</strong> </h4>
                        </span>
                        <h5>{t('stanowisko')}</h5>
                        <div className='card-action'>
                            <div className='col'>
                                <p><strong>{t('data_urodzenia')}</strong>{t('data_urodzenia_var')}</p>
                                <p><strong>{t('adres')}</strong>{t('adres_var')}</p>
                                <p><strong>{t('email')}</strong>{t('email_var')}</p>
                                <p><strong>{t('telefon')}</strong>{t('telefon_var')}</p>
                            </div>
                            <div className='col' style={{marginLeft: 70}}>
                                <p><strong>{t('jezyki')}</strong></p>
                                <p>{t('jezyk_jeden')}</p>
                                <p>{t('jezyk_dwa')}</p>
                                <p>{t('jezyk_trzy')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
