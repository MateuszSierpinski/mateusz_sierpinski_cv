import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Doswiadczenie() {

    const { t } = useTranslation()

        return (
            <div className='card'>
              <div className='card-content'>
                <h6 className='mt-bottom'><strong>{t('tytul_doswiadczenie')}</strong></h6>
                <div className='row'>
                    <div className='col-sm-3'>
                        <p className='teal yearexp white-text'>
                            <strong>&nbsp;{t('stanowisko_data_0')}</strong>
                        </p>
                    </div>
                    <div className='col-sm-9'>
                        <blockquote className='no-pad'>
                            <h6 className='no-pad mt-bottom'>
                                <strong>{t('stanowisko_nazwa_0')}</strong>
                            </h6>
                            <p className='pochyle_fonty'>{t('stanowisko_firma_0')}</p>
                            <ul>
                                <li>{'\u2022'}  {t('stanowisko_opis_0_punkt_1')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_0_punkt_2')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_0_punkt_3')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_0_punkt_4')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_0_punkt_5')}</li>
                            </ul>
                        </blockquote>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <p className='teal yearexp white-text'>
                            <strong>&nbsp;{t('stanowisko_data_1')}</strong>
                        </p>
                    </div>
                    <div className='col-sm-9'>
                        <blockquote className='no-pad'>
                            <h6 className='no-pad mt-bottom'>
                                <strong>{t('stanowisko_nazwa_1')}</strong>
                            </h6>
                            <p className='pochyle_fonty'>{t('stanowisko_firma_1')}</p>
                            <ul>
                                <li>{'\u2022'}  {t('stanowisko_opis_1_punkt_1')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_1_punkt_2')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_1_punkt_3')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_1_punkt_4')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_1_punkt_5')}</li>
                            </ul>
                        </blockquote>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <p className='teal yearexp white-text'>
                            <strong>&nbsp;{t('stanowisko_data_2')}</strong>
                        </p>
                    </div>
                    <div className='col-sm-9'>
                        <blockquote className='no-pad'>
                            <h6 className='no-pad mt-bottom'>
                                <strong>&nbsp;{t('stanowisko_nazwa_2')}</strong>
                            </h6>
                            <p className='pochyle_fonty'>{t('stanowisko_firma_2')}</p>
                            <ul>
                                <li>{'\u2022'}  {t('stanowisko_opis_2_punkt_1')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_2_punkt_2')}</li>
                            </ul>
                        </blockquote>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <p className='teal yearexp white-text'>
                            <strong>&nbsp;{t('stanowisko_data_3')}</strong>
                        </p>
                    </div>
                    <div className='col-sm-9'>
                        <blockquote className='no-pad'>
                            <h6 className='no-pad mt-bottom'>
                                <strong>{t('stanowisko_nazwa_3')}</strong>
                            </h6>
                            <p className='pochyle_fonty'>{t('stanowisko_firma_3')}</p>
                            <ul>
                                <li>{'\u2022'}  {t('stanowisko_opis_3_punkt_1')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_3_punkt_2')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_3_punkt_3')}</li>
                                <li>{'\u2022'}  {t('stanowisko_opis_3_punkt_4')}</li>
                            </ul>
                        </blockquote>
                    </div>
                </div>
              </div>  
            </div>
        )
}
