import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '../../assets/Logo.png';
import { SelectedPage } from "../../shared/types";
import Link from "./Link";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navBackground = isTopOfPage ? "": "bg-primary-100 drop-shadow"
    return (
        <nav >
            <div className={`${navBackground} flexbetween fixed top-0 z-30 py-6 w-full`}>
                <div className="flexbetween mx-auto w-5/6">
                    <div className="flexbetween w-full gap-16">
                    {/* LEft side */}
                <img src={Logo} alt="logo" />

                    {/* Right side */}
                        {isAboveMediumScreens ?
                    <div className="flexbetween w-full">
                 
                        <div className="flexbetween gap-8 text-sm">
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link
                                        page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link
                                        page="Contact Us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                        </div>
                    <div className="flexbetween gap-8">
                                    <button>Login</button>
                                    <ActionButton setSelectedPage={setSelectedPage}> Become a member</ActionButton>
                    </div>

                </div>
                            : (
                                <button
                                    className="rounded-full bg-secondary-500 p-2"
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <Bars3Icon className="h-6 w-6 text-white" />
                                </button>
                            )}
                </div>
                </div>
            </div>

            {/* MOBILE SCREEN*/}
            {!isAboveMediumScreens && isMenuToggled && 
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400"/>
                        </button>
                </div>

                    <div className="ml-[33%] flex flex-col gap-10 text-xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} />
                    </div>

                </div>}
        </nav>
    )
}

export default Navbar
