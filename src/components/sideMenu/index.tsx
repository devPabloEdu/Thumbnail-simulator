import type { ISideMenu } from '../../types/ISideMenu';
import './index.scss';

const SideMenu = ({ show }: ISideMenu) => {
    if (!show) return null;

    return <div>
        teste
    </div>
};

export default SideMenu;