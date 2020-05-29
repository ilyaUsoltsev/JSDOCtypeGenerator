import { app, Component } from "apprun";

export default class AboutComponent extends Component {
  state = "About";

  view = (state) => (
    <div>
      <h1>{state}</h1>
      <p>
        This application is built with{" "}
        <a href="https://apprun.js.org/" target="_blank">
          AppRun
        </a>
      </p>
    </div>
  );
}
