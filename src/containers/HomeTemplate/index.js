import React, { Component } from 'react'
import Navbar from './_components/navbar'
import { Route } from "react-router-dom"




 class LayoutHome extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        )
    }
}




export default class HomeTemplate extends Component {
    render() {
        const {exact,path,Component} =  this.props;
        return (
                <LayoutHome>
                    <Route exact = {exact} path={path} component={Component}/> 
                </LayoutHome>
        )
    }
}
