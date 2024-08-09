import { Sidebar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import {HiArrowRight, HiUser} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

function DashSidebar() {
    const location = useLocation()
    const [tab,setTab] = useState('');
    useEffect(()=>{
      const urlParams = new URLSearchParams(location.search)
      const tabFormUrl = urlParams.get('tab')
      console.log(tabFormUrl);
      if(tabFormUrl){
        setTab(tabFormUrl);
      }
    },[location.search])
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Sidebar.Item active={tab==='profile'} icon={HiUser}  label={'User'} labelColor='dark'>
                   <Link to={'/Dashboard?tab=profile'}>Profile</Link>
                </Sidebar.Item>
                <Sidebar.Item icon={HiArrowRight}  labelColor='dark' className='cursor-pointer'>
                    Signout
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar