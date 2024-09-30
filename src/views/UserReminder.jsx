import React from "react"
import NavbarUser from "../components/User/NavBarUser"
import NavbarLat from "../components/User/NavBarLat"
import ReminderUser from "../components/User/ReminderUser"

const UserReminder = () => {
    return (
        <div className='flex'>
        <div className='w-sidebar-cero lg:w-sidebar'>
          <NavbarLat/>
        </div>
        <div className='w-content-full lg:w-content'>
          <NavbarUser/>
          <ReminderUser/>
        </div>
      </div>
    )
}

export default UserReminder