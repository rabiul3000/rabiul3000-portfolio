import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import RootLayout from "./pages/Layouts/RootLayout";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Skills from "./pages/Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/detail/:id",
        Component: ProjectDetail,
      },
      {
        path: "/skills",
        Component: Skills,
      },
      {
        path: "/about",
        Component: About,
      },

      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

export default router;
