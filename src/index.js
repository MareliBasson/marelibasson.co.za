import React from "react"
import ReactDOM from "react-dom"
import Routes from "routes.js"
import registerServiceWorker from "./registerServiceWorker"

// Stylesheets
import "normalize.css"
import "./index.css"

ReactDOM.render(<Routes />, document.getElementById("root"))
registerServiceWorker()
