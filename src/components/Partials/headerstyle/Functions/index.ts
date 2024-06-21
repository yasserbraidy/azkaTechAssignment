import { useLocation } from '../imports';

export function useHeaderFunctions() {



    function miniSidebar() {
        document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
    };

    let location = useLocation();
    
    return {
        miniSidebar,
        location,
    }
}