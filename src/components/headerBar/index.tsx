import { useState } from 'react';
import './index.scss';
import { MdOutlineMenu } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import SideMenu from '../sideMenu';
import type { ISideMenu } from '../../types/ISideMenu';

type HeaderBarProps = Omit<ISideMenu, 'show'>;

const HeaderBar = (props: HeaderBarProps): React.ReactElement => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return <>
        <div className='d-flex align-items-center gap-5 flex-row px-5 py-3 headerBar'>
            {showMenu ?<CiMenuFries size={32} color='var(--white)' onClick={() => setShowMenu(!showMenu)} /> : <MdOutlineMenu size={32} color='var(--white)' onClick={() => setShowMenu(!showMenu)} />}
            <h1>Thumbnail Simulator</h1>
        </div>
        <SideMenu {...props} show={showMenu} />
    </>
}

export default HeaderBar;