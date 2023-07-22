import React from 'react'
import { useTranslation } from 'react-i18next'
import '../App.css';

export default function Portfolio() {

    const { t } = useTranslation()

    return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h6><strong>{t('tytul_portfolio')}</strong></h6>
                    <table className='striped'>
                        <thead>
                            <tr>
                                <th>{t('tytul_tabelka_1')}</th>
                                <th>{t('tytul_tabelka_2')}</th>
                                <th className='na_srodku'>{t('tytul_tabelka_3')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Malform Checker (C#)</td>
                                <td>2019</td>
                                <td className='na_srodku'><a href="https://github.com/MateuszSierpinski/Malform-Checker" className='btn blue lighten-2'>{t('sprawdz_link')}</a></td>
                            </tr>
                            <tr>
                                <td>Quality Check Application (C#)</td>
                                <td>2020</td>
                                <td className='na_srodku'><a href="https://github.com/MateuszSierpinski/QC" className='btn blue lighten-2'>{t('sprawdz_link')}</a></td>
                            </tr>
                            <tr>
                                <td>CV - Resume (React)</td>
                                <td>2021</td>
                                <td className='na_srodku'><a href="https://github.com/MateuszSierpinski/mateusz_sierpinski_cv" className='btn blue lighten-2'>{t('sprawdz_link')}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
