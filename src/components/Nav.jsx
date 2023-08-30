import {headerLogo} from "../assets/images/index";
import {hamburger} from "../assets/icons/index";
import { navLinks } from "../constants";

const Nav = ()=>{
    return(
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex items-center justify-between max-container" >
                <a href="/">
                    <img src={headerLogo} alt="Logo" height={29} width={130} ></img>
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item)=>{
                        return <li key={item.label} ><a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray" >{item.label} </a></li>
                    })}
                </ul>
                <div className="hidden max-lg:block"><img src={hamburger} alt="hamburger" width={25} height={25} ></img></div>
            </nav>
        </header>
    )
}
export default Nav;
