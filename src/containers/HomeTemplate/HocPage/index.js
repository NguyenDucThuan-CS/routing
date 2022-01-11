import React, { Component } from 'react'
import NhanVien from './NhanVien'
import WithCard from './WithCard'

const WrapperNhanVien = WithCard(NhanVien);
export default class HocPage extends Component {
    
    render() {
       
        return (
            <div>
                <h3>Hoc page</h3>
                <WrapperNhanVien />
            </div>
        )
    }
}
