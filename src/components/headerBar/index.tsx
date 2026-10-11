import { useState } from 'react';
import './index.scss';
import { MdOutlineMenu } from "react-icons/md";
import SideMenu from '../sideMenu';

const HeaderBar = (): React.ReactElement => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return <>
    <div className='d-flex align-items-center gap-5 flex-row px-5 py-3 headerBar'>
        <MdOutlineMenu size={32} color='var(--white)' onClick={() => setShowMenu(!showMenu)} />
        <h1>Thumbnail Simulator</h1>
    </div>
    <SideMenu show={showMenu}/>
    </>
}

export default HeaderBar;