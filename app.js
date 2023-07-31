import { showCreate } from "./views/create.js";
import { showHomeView } from "./views/home.js";
import { showRegister } from "./views/register.js";
import { showLogin } from "./views/login.js";
import { showCatalog } from "./views/catalog.js";
import { showDetails } from "./views/details.js";
import { initializer } from "./router.js";
import { logout } from "./api/user.js";


document.getElementById("defSection").remove();

async function logoutFunctionality() {

    await logout();
    router.goTo("/");
    router.updateNav;
}

const links = {

    "/": showHomeView,
    "/catalog": showCatalog,
    "/login": showLogin,
    "/register": showRegister,
    "/create": showCreate,
    "/details": showDetails,
    "/logout": logoutFunctionality
}


const router = initializer(links);
router.updateNav();
router.goTo("/");