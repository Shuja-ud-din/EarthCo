import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

    const [activeIndex, setActiveIndex] = useState(0)


    const sideBarData = [
        {
            label: 'Dashboard',
            path: '/Dashboard',
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            label: 'Customers',
            path: '/Dashboard/Customers',
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            label: 'Estimates',
            path: '/Dashboard/Estimates',
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.8381 12.7317C16.4566 12.7317 16.9757 13.2422 16.8811 13.853C16.3263 17.4463 13.2502 20.1143 9.54009 20.1143C5.43536 20.1143 2.10834 16.7873 2.10834 12.6835C2.10834 9.30245 4.67693 6.15297 7.56878 5.44087C8.19018 5.28745 8.82702 5.72455 8.82702 6.36429C8.82702 10.6987 8.97272 11.8199 9.79579 12.4297C10.6189 13.0396 11.5867 12.7317 15.8381 12.7317Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M19.8848 9.1223C19.934 6.33756 16.5134 1.84879 12.345 1.92599C12.0208 1.93178 11.7612 2.20195 11.7468 2.5252C11.6416 4.81493 11.7834 7.78204 11.8626 9.12713C11.8867 9.5459 12.2157 9.87493 12.6335 9.89906C14.0162 9.97818 17.0914 10.0862 19.3483 9.74467C19.6552 9.69835 19.88 9.43204 19.8848 9.1223Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            label: 'Service Requests',
            path: '/Dashboard/Service-Requests',
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.64111 13.5497L9.38482 9.9837L12.5145 12.4421L15.1995 8.97684" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                <ellipse cx="18.3291" cy="3.85021" rx="1.76201" ry="1.76201" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.6808 2.86012H7.01867C4.25818 2.86012 2.54651 4.81512 2.54651 7.57561V14.9845C2.54651 17.7449 4.22462 19.6915 7.01867 19.6915H14.9058C17.6663 19.6915 19.3779 17.7449 19.3779 14.9845V8.53213" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            label: 'Irrigation',
            path: '/Dashboard/Irrigation',
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5346 2.55658H7.1072C4.28845 2.55658 2.52112 4.55216 2.52112 7.37733V14.9985C2.52112 17.8237 4.2802 19.8192 7.1072 19.8192H15.1959C18.0238 19.8192 19.7829 17.8237 19.7829 14.9985V11.3062" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.09214 10.0108L14.9424 3.16057C15.7958 2.30807 17.1791 2.30807 18.0325 3.16057L19.1481 4.27615C20.0015 5.12957 20.0015 6.51374 19.1481 7.36624L12.2648 14.2495C11.8917 14.6226 11.3857 14.8325 10.8577 14.8325H7.42389L7.51006 11.3675C7.52289 10.8578 7.73097 10.372 8.09214 10.0108Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.9014 4.21895L18.0869 8.40445" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            label: 'Punchlist',
            path: '/Dashboard/Punchlist',
            icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5346 2.55658H7.1072C4.28845 2.55658 2.52112 4.55216 2.52112 7.37733V14.9985C2.52112 17.8237 4.2802 19.8192 7.1072 19.8192H15.1959C18.0238 19.8192 19.7829 17.8237 19.7829 14.9985V11.3062" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.09214 10.0108L14.9424 3.16057C15.7958 2.30807 17.1791 2.30807 18.0325 3.16057L19.1481 4.27615C20.0015 5.12957 20.0015 6.51374 19.1481 7.36624L12.2648 14.2495C11.8917 14.6226 11.3857 14.8325 10.8577 14.8325H7.42389L7.51006 11.3675C7.52289 10.8578 7.73097 10.372 8.09214 10.0108Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.9014 4.21895L18.0869 8.40445" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        }
    ]

    const handlePreventLink = (event) => {
        event.preventDefault();
        toggleShowMenu()
    }

    const renderOptions = sideBarData.map((option, index) => {
        const handleActiveClass = (clickIndex) => {
            setActiveIndex(clickIndex)
        }
        let activeClass = '';
        if (activeIndex === index) {
            activeClass = 'mm-active'
        }
        if (window.location.pathname === option.path) {
            activeClass = 'mm-active'
        }
        else {
            activeClass = ''
        }
        return (
            <li key={index} className={activeClass} onClick={() => { handleActiveClass(index) }}>
                <NavLink to={option.path}  >
                    <div className="menu-icon ">
                        {option.icon}
                    </div>
                    <span className="nav-text">{option.label}</span>
                </NavLink>
            </li>
        )
    })

    const toggleShowMenu = () => {
        document.getElementById('collapseMenu').classList.toggle('mm-show');
        document.getElementById('bottomChev').classList.toggle('rotatezero')
    }

    return (
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    {renderOptions}
                    <li>
                        <a href='/' className='expand-bottom' onClick={handlePreventLink}>
                            <div className="menu-icon">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.75713 9.35157V15.64" stroke="#888888" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M11.0349 6.34253V15.64" stroke="#888888" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M15.2428 12.6746V15.64" stroke="#888888" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.2952 1.83333H6.70474C3.7103 1.83333 1.83331 3.95274 1.83331 6.95306V15.0469C1.83331 18.0473 3.70157 20.1667 6.70474 20.1667H15.2952C18.2984 20.1667 20.1666 18.0473 20.1666 15.0469V6.95306C20.1666 3.95274 18.2984 1.83333 15.2952 1.83333Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <span className="nav-text">Monthly Reports</span>
                            <span className="material-symbols-sharp" id='bottomChev'>
                                expand_more
                            </span>
                        </a>
                        <ul className="mm-collapse left" id='collapseMenu' >
                            <li><NavLink to="/Dashboard/SummaryReport">Service Request</NavLink></li>
                            <li><NavLink to="/Dashboard/ProposalSummary">Proposal Summary</NavLink></li>
                            <li><NavLink to="/Dashboard/Weekly-Reports">Weekly </NavLink></li>
                            <li><NavLink to="/Dashboard/Landscape">Landsacpe</NavLink></li>
                        </ul>
                    </li>
                    {/* <li>
                        <NavLink to='/Landscapelist' className="" >
                            <div className="menu-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.7379 2.76181H8.08493C6.00493 2.75381 4.29993 4.41181 4.25093 6.49081V17.2038C4.20493 19.3168 5.87993 21.0678 7.99293 21.1148C8.02393 21.1148 8.05393 21.1158 8.08493 21.1148H16.0739C18.1679 21.0298 19.8179 19.2998 19.8029 17.2038V8.03781L14.7379 2.76181Z" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.2882 15.3585H8.88818" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.2432 11.606H8.88721" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="nav-text">Landsacpe</span>
                        </NavLink>
                    </li> */}



                    {/* <li><a className="" >
                        <div className="menu-icon">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9732 2.52102H7.0266C4.25735 2.52102 2.52118 4.48177 2.52118 7.25651V14.7438C2.52118 17.5186 4.2491 19.4793 7.0266 19.4793H14.9723C17.7507 19.4793 19.4795 17.5186 19.4795 14.7438V7.25651C19.4795 4.48177 17.7507 2.52102 14.9732 2.52102Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.73657 11.0002L9.91274 13.1754L14.2632 8.82493" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="nav-text">Performance</span>
                    </a>
                    </li>
                    <li><a className="" >
                        <div className="menu-icon">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.75713 9.35157V15.64" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.0349 6.34253V15.64" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.2428 12.6746V15.64" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.2952 1.83333H6.70474C3.7103 1.83333 1.83331 3.95274 1.83331 6.95306V15.0469C1.83331 18.0473 3.70157 20.1667 6.70474 20.1667H15.2952C18.2984 20.1667 20.1666 18.0473 20.1666 15.0469V6.95306C20.1666 3.95274 18.2984 1.83333 15.2952 1.83333Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="nav-text">Projects</span>
                    </a>
                    </li>
                 
                    <li><a className="" >
                        <div className="menu-icon">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.79222 13.9396C12.1738 13.9396 15.0641 14.452 15.0641 16.4989C15.0641 18.5458 12.1931 19.0729 8.79222 19.0729C5.40972 19.0729 2.52039 18.5651 2.52039 16.5172C2.52039 14.4694 5.39047 13.9396 8.79222 13.9396Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.79223 11.0182C6.57206 11.0182 4.77173 9.21874 4.77173 6.99857C4.77173 4.7784 6.57206 2.97898 8.79223 2.97898C11.0115 2.97898 12.8118 4.7784 12.8118 6.99857C12.8201 9.21049 11.0326 11.0099 8.82064 11.0182H8.79223Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.1095 9.9748C16.5771 9.76855 17.7073 8.50905 17.7101 6.98464C17.7101 5.48222 16.6147 4.23555 15.1782 3.99997" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.0458 13.5045C18.4675 13.7163 19.4603 14.2149 19.4603 15.2416C19.4603 15.9483 18.9928 16.4067 18.2374 16.6936" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="nav-text">Manage Clients</span>
                    </a>
                    </li>
                    <li><a className="" >
                        <div className="menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.7379 2.76181H8.08493C6.00493 2.75381 4.29993 4.41181 4.25093 6.49081V17.2038C4.20493 19.3168 5.87993 21.0678 7.99293 21.1148C8.02393 21.1148 8.05393 21.1158 8.08493 21.1148H16.0739C18.1679 21.0298 19.8179 19.2998 19.8029 17.2038V8.03781L14.7379 2.76181Z" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.2882 15.3585H8.88818" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.2432 11.606H8.88721" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <span className="nav-text">Blog</span>
                      <span className="badge badge-danger badge-xs ms-1">NEW</span> 
                    </a>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default SideBar
