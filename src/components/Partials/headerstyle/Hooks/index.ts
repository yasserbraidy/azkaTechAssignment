import {
    useState, useEffect,
    useSelector,
    SettingSelector
} from "../imports";
    
export function useHeaderHooks() {
    const navbarHide = useSelector(SettingSelector.navbar_show); // array
    const themeFontSize = useSelector(SettingSelector.theme_font_size);
    const headerNavbar = useSelector(SettingSelector.header_navbar);
    const x = useEffect(() => {
        if (headerNavbar === "navs-sticky" || headerNavbar === "nav-glass") {
            window.onscroll = () => {
                if (document.documentElement.scrollTop > 50) {
                document.getElementsByTagName("nav")[0].classList.add("menu-sticky");
                }
                else {
                document
                    .getElementsByTagName("nav")[0]
                    .classList.remove("menu-sticky");
                }
            };
        }

        document.getElementsByTagName("html")[0].classList.add(themeFontSize);

        //offcanvase code
        const result = window.matchMedia("(max-width: 1200px)");
        window.addEventListener("resize", () => {
            if (result.matches === true) {
                if (show1 === true) {
                    document.documentElement.style.setProperty("overflow", "hidden");
                }
                else {
                    document.documentElement.style.removeProperty("overflow");
                }
            }
            else {
                document.documentElement.style.removeProperty("overflow");
            }
        });

        if (window.innerWidth <= 1200) {
            if (show1 === true) {
                document.documentElement.style.setProperty("overflow", "hidden");
            }
            else {
                document.documentElement.style.removeProperty("overflow");
            }
        }
        else {
            document.documentElement.style.removeProperty("overflow");
        }
    });

    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(false);

    return {
        navbarHide,
        themeFontSize,
        headerNavbar,
        show,
        setShow,
        show1,
        setShow1,
    };
}