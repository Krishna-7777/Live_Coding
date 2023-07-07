import React from 'react'
import "./Table.css"
import Row from './Row'
import profile from "../../assets/profile.jpg"

function MTable() {
  return (
    <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Role</th>
                <th> </th>
            </thead>
            <tbody>
                <Row img={profile} name="Olivia Rhye" email="olivia@untitledui.com" role=" "/>
                <Row img={profile} name="Olivia Rhye" email="olivia@untitledui.com" role="Viewer"/>
                <Row img={profile} name="Olivia Rhye" email="olivia@untitledui.com" role="Editor"/>
                <Row img={profile} name="Olivia Rhye" email="olivia@untitledui.com" role="Designer"/>
                <Row img={profile} name="Olivia Rhye" email="olivia@untitledui.com" role="Admin"/>
                <Row img={profile} name="Olivia Rhye" email="olivia@untitledui.com" role=" "/>
            </tbody>
        </table>
    </div>
  )
}

export default MTable