import React, { useEffect, useState } from 'react'
// import Home from '../Screens/Home'
// import {Link} from "react-scroll";
import styles from './Navbar.module.css';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useScrollPosition } from '../Hooks/scrollPosition';
import{Link}from "react-router-dom";


const Navbar = () => {
    const [navBarOpen,setNavBarOpen] = useState(false)
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    const detectDimension = () => {
    setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    };
    useEffect(() => {
        window.addEventListener("resize", detectDimension);
        windowDimension.width > 800 && setNavBarOpen(false);
        return () => {
          window.removeEventListener("resize", detectDimension);
        };
      }, [windowDimension]);

    const links=[
        {
            id:1,
            link:"Home",
            href:"/home",
        },
        {
            id:2,
            link:"Login",
            href:"/login",
        },
        {
            id:2,
            link:"How we Work",
        }

    ]
    const scrollPosition = useScrollPosition();
  return (
    <div className={!navBarOpen ===true ? styles.navbar : styles.navOpen}>
        {!navBarOpen && <p className={styles.logo}>Flashminds</p>}
        {!navBarOpen && windowDimension.width<800 ? (
            <AiOutlineMenu onClick={()=>setNavBarOpen(!navBarOpen)} size={25}></AiOutlineMenu>)
            :(
            windowDimension.width<800 &&(
            <IoMdClose  onClick={()=>setNavBarOpen(!navBarOpen)} size={25} />)
         )}
          {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link }) => (
            <div>
              <Link
                key={id}
                onClick={() => setNavBarOpen(false)}
                // to={link}
                smooth
                duration={500}
                className={styles.navLink}
                to={id.href}>{id.name}
                {link === "HowWeWork" ? "How we work" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
        {navBarOpen || 
        (windowDimension.width >800 &&(
        <ul className={styles.linksContainer}>
            {links.map((x)=>(
                <div>
                <Link
                    onClick={()=>setNavBarOpen(false)} 
                    to={x.link}
                    smooth
                    duration={500}
                    className={styles.navLink}>
                    {x.link === "HowWeWork" ? "How we work" :x.link}
                    </Link>
                    <div className={styles.order}></div>
                </div>
            ))}   
        </ul>
        ))}
    </div>
  )
}

export default Navbar
