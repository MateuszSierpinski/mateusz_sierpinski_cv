import React, { Component } from 'react'
import ImgProfile from '../zdjecia/zdjecie1.jpg'

export default class Profil extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-image'>
                        <img className='activator' src={ImgProfile} alt='Mateusz Sierpiński'/>
                    </div>
                    <div className='card-content'>
                        <span className='card-title activator gery-text text-darken-4'>
                            Mateusz Sierpiński
                        </span>
                        <p>Programista Data Processing II</p>
                    </div>
                </div>
            </div>
        )
    }
}
