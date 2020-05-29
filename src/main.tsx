import app from "apprun";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";

app.render(document.body, <Layout />);

const element = "my-app";
new Home().start(element, { route: "#, #Home" });
new About().mount(element, { route: "#About" });
