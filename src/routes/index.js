import AddUser from "../containers/AdminTemplate/AddUser";
import Dashboard from "../containers/AdminTemplate/Dashboard";
import AboutPage from "../containers/HomeTemplate/AboutPage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import HocPage from "../containers/HomeTemplate/HocPage";
import HomePage from "../containers/HomeTemplate/HomePage";
import HooksPage from "../containers/HomeTemplate/HooksPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import RenderProps from "../containers/HomeTemplate/RenderProps";

const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: "/about",
        component: AboutPage,
    },
    {
        exact: false,
        path: "/list-movie",
        component: ListMoviePage,
    },
    {
        exact: false,
        path: "/detail/:id",
        component: DetailMoviePage,
    }, 
    {
        exact: false,
        path: "/hoc",
        component: HocPage,
    },
    {
        exact: false,
        path: "/render-props",
        component: RenderProps,
    },
    {
        exact: false,
        path: "/hook",
        component: HooksPage,
    }

];
const routesAdmin = [
    {
        exact: false,
        path: "/dashboard",
        component: Dashboard,
    },
    {
        exact: false,
        path: "/add-user",
        component: AddUser,
    }
]
export {routesAdmin, routesHome}