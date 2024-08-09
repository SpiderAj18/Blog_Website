import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import ProfileSection from '../components/ProfileSection';

function Dashboard() {
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
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:56"><DashSidebar/></div>
      {tab==='profile' && (<div className="flex-1 flex  justify-center"><ProfileSection/></div>)}
    </div>
  )
}

export default Dashboard