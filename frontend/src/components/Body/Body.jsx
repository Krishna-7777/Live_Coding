import React from 'react'
import "./Body.css"
import MTable from '../Table/MTable'

function Body() {
  return (
    <div className='body'>
        <div className='UMHeading'>User Management</div>
        <div className='subHeading'>Add or manage your Domains</div>
        <div className='inviteBox'>
            <div className='Users'>Users</div>
            <div className='subHeading'>Add or Remove Users and manage their roles and permissions</div>
            <button><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66666 5.83334L8.47076 10.5962C9.02173 10.9819 9.29722 11.1747 9.59688 11.2494C9.86157 11.3154 10.1384 11.3154 10.4031 11.2494C10.7028 11.1747 10.9782 10.9819 11.5292 10.5962L18.3333 5.83334M5.66666 16.6667H14.3333C15.7335 16.6667 16.4335 16.6667 16.9683 16.3942C17.4387 16.1545 17.8212 15.7721 18.0608 15.3016C18.3333 14.7669 18.3333 14.0668 18.3333 12.6667V7.33334C18.3333 5.9332 18.3333 5.23314 18.0608 4.69836C17.8212 4.22795 17.4387 3.8455 16.9683 3.60582C16.4335 3.33334 15.7335 3.33334 14.3333 3.33334H5.66666C4.26653 3.33334 3.56646 3.33334 3.03168 3.60582C2.56128 3.8455 2.17882 4.22795 1.93914 4.69836C1.66666 5.23314 1.66666 5.9332 1.66666 7.33334V12.6667C1.66666 14.0668 1.66666 14.7669 1.93914 15.3016C2.17882 15.7721 2.56128 16.1545 3.03168 16.3942C3.56646 16.6667 4.26653 16.6667 5.66666 16.6667Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Invite People</button>
        </div>
        <MTable />
    </div>
  )
}

export default Body