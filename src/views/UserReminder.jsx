import React from "react"
import NavbarUser from "../components/User/NavBarUser"
import NavbarLat from "../components/User/NavBarLat"
import ReminderUser from "../components/User/ReminderUser"

const UserReminder = () => {
    return (
        <div>
            <NavbarUser/>
            <NavbarLat/>
            <ReminderUser/>
        </div>
    )
}

export default UserReminder