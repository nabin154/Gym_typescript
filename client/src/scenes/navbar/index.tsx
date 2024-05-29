import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '../../assets/Logo.png';

type Props = {};
const Navbar = (props: Props) => {
    return (
        <nav >
            <div className="flexbetween fixed top-0 z-30 py-6 w-full">
                <div className="flexbetween mx-auto w-5/6">
                    <div className="flexbetween w-full gap-16">
                    {/* LEft side */}
                <img src={Logo} alt="logo" />

                    {/* Right side */}
                    <div className="flexbetween w-full">
                 
                        <div className="flexbetween gap-8 text-sm">
                            <li>home</li>
                            <li>home</li>
                            <li>home</li>
                            <li>home</li>
                            <li>home</li>
                        </div>
                    <div className="flexbetween gap-8">
                        <button>login</button>
                        <button>signup</button>
                    </div>

                </div>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
