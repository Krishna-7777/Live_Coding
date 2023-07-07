import React from 'react'
import trash from "../../assets/trash.png"

function Row({ img, name, email, role }) {
    return (
        <>
            <tr>
                <td>
                    <div className='details'>
                        {img && <img src={img} alt="" srcset="" />}
                        <div>
                            <div className='name'>{name}</div>
                            <div className='email'>{email}</div>
                        </div>
                    </div>
                </td>
                <td><select name="" id="">
                    <option value="">{role}</option>
                    <option value="Viewer">Viewer</option>
                    <option value="Editor">Editor</option>
                    <option value="Designer">Designer</option>
                    <option value="Reviewer">Reviewer</option>
                    <option value="Admin">Admin</option>
                    </select></td>
                <td><img src={trash} alt="" srcset="" /></td>
            </tr>
        </>
    )
}

export default Row