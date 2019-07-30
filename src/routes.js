import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "pages/home"
import PageOne from "pages/page1"

const Routes = () => (
	<Router>
		<React.Fragment>
			<Route exact path="/" component={HomePage} />
			<Route path="/gallery" component={PageOne} />
			<Route path="/convertor" component={PageOne} />
		</React.Fragment>
	</Router>
)

export default Routes
