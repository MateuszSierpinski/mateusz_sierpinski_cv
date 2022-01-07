import React  from 'react'
import { useTranslation } from 'react-i18next'

export default function DodatkoweUmiejetnosci() {

    const { t } = useTranslation()    

    return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <div className='row mt-top'>
                        <div className='col s6'>
                            <h6><strong>{t('tytul_doatkowe_um')}</strong></h6>
                            <ul>
                                <li>{'\u2022'} {t('dodatkowe_um_1')}</li>
                                <li>{'\u2022'} {t('dodatkowe_um_2')}</li>
                                <li>{'\u2022'} {t('dodatkowe_um_3')}</li>
                                <li>{'\u2022'} {t('dodatkowe_um_4')}</li>
                                <li>{'\u2022'} {t('dodatkowe_um_5')}</li>
                            </ul>
                        </div>
                        <div className='col s6'>
                            <h6> <strong>HOBBY</strong></h6>
                            <ul>
                                <li>{'\u2022'} {t('hobby_1')}</li>
                                <li>{'\u2022'} {t('hobby_2')}</li>
                                <li>{'\u2022'} {t('hobby_3')}</li>
                                <li>{'\u2022'} {t('hobby_4')}</li>
                                <li>{'\u2022'} {t('hobby_5')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
