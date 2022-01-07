import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Wyksztalcenie() {

    const { t } = useTranslation()

    return (
        <div className='card'>
            <div className='card-action'>
                <h6><strong>{t('tytul_wyksztalcenie')}</strong></h6>
                <table className='striped'>
                    <thead>
                        <tr>
                            <th>{t('placowka')}</th>
                            <th>{t('data_roz')}</th>
                            <th>{t('data_ukon')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li>{t('placowka_1')}</li>
                                    <li className='pochyle_fonty'>{t('placowka_podty_1')}</li>
                                </ul>
                            </td>
                            <td>{t('placowka_data_roz_1')}</td>
                            <td>{t('placowka_data_zak_1')}</td>
                        </tr>
                        <tr>
                            <td>
                                <ul>
                                    <li>{t('placowka_2')}</li>
                                    <li className='pochyle_fonty'>{t('placowka_podty_2')}</li>
                                </ul>
                            </td>
                            <td>{t('placowka_data_roz_2')}</td>
                            <td>{t('placowka_data_zak_2')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
