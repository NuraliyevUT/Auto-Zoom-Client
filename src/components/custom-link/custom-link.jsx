import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CustomLink = ({to, children, ...props}) => {

    const match = useLocation().pathname === to

  return (
    <Link to={to} {...props} className={`${match ? "text-white/55" : ""} text-[18px] xl:text-[14px] xl:font-normal tracking-[4px] xl:tracking-normal text-white uppercase ml-10 xl:ml-0`}>
        {children}
    </Link>
  )
}

export default CustomLink