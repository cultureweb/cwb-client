// Views for Website layout
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";

const routes = [
    {
        path: "about",
        name: "About",
        icon: null,
        component: About,
        layout: "/"
    },
    {
        path: "blog",
        name: "Blog",
        icon: null,
        component: Blog,
        layout: "/"
    }
];

export default routes;
