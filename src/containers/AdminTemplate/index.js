import React, { Component } from 'react'
import Navbar from './_component/navbar';
import { Redirect, Route } from "react-router-dom"

function LayoutAdmin(props) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}
export default function AddminTemplate(props) {
    const {exact, path, Component} = props;
    if(localStorage.getItem("User Admin")) {
        return (
            <LayoutAdmin>
                <Route exact = {exact} path = {path} component={Component}/>
            </LayoutAdmin>
        )
    }

    else {
        return <Redirect to = "/auth"/>
    }
    
}
