import { app, Component, on } from "apprun";
import process from "./process";

export default class HomeComponent extends Component {
  state = {
    input: "",
    result: "",
  };

  view = (state) => (
    <div style={{ width: "100vw" }}>
      <h1>Paste JSON to get JSDOC types</h1>
      <div className="row">
        <div className="col-4">
          <form onsubmit={(e) => this.run("process", e)}>
            <label htmlFor="json">Your object</label>
            <textarea
              style={{ width: "100%" }}
              name="json"
              id=""
              placeholder="paste your object in JSON format here..."
              rows="20"
            ></textarea>
            <label htmlFor="typeName">Type Name</label>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="e.g. MyType"
              name="typeName"
            />
            <input type="checkbox" name="prefix" value="cream" />
            Prefix nested objects with parent type name?
            <br />
            <button className="btn btn-primary float-right" type="submit">
              Run
            </button>
          </form>
        </div>
        <div className="col-4">
          {state.result && (
            <div>
              <label htmlFor="result">Result</label>
              <textarea
                style={{ width: "100%" }}
                name="result"
                id=""
                rows="20"
                value={state.result}
              ></textarea>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  @on("process") processInput = (state, e) => {
    e.preventDefault();
    try {
      const type = e.target.typeName.value.trim() || "MyNewType";
      const isPrefixed = e.target.prefix.checked;
      const value = JSON.parse(e.target.json.value);
      if (typeof value !== "object" || value == false) {
        return { ...state, result: "Provide valid object in JSON format" };
      } else {
        return { ...state, result: process(value, type, isPrefixed) };
      }
    } catch (error) {
      return { ...state, result: "Provide valid object in JSON format" };
    }
  };
}
