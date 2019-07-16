import React, { Component } from "react"
import PageTemplate from "components/page-template"
import "./home.css"

class HomePage extends Component {
	render() {
		return (
			<PageTemplate pageHead="Home Page">
				<p>Some text goes here</p>
				<div className="section">
					<div className="section-content" id="section1">
						<h1>Section 1</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet massa sed purus porta euismod. Morbi non
							mi leo. Donec at blandit justo. Donec varius leo lectus, nec volutpat ipsum molestie vitae. Class aptent taciti
							sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras posuere, mauris id malesuada
							imperdiet, mauris felis rhoncus eros, non pulvinar nunc sem et orci. Nulla facilisi. Nulla ut tristique enim.
							Sed ac pharetra tellus. Vestibulum vel sem et ligula commodo tincidunt. Pellentesque a odio mollis, bibendum est
							eget, malesuada arcu. Donec vitae posuere erat, eu rhoncus enim. Etiam facilisis feugiat ultrices. Etiam vel
							auctor nibh. Sed porttitor ex egestas, faucibus mi quis, gravida nisl. Sed non neque vitae eros dignissim
							facilisis. Praesent lacus sem, facilisis sed malesuada faucibus, feugiat vel tellus. Sed nec nisl sed massa
							pharetra interdum non in metus. Aenean consequat aliquet velit sed vulputate. Nulla eget auctor turpis, et
							venenatis augue. Fusce aliquet sagittis urna a condimentum. Praesent convallis accumsan magna et eleifend.
							Aliquam ornare urna nec ultrices pretium. Nam iaculis sed libero quis congue. Aenean ac pharetra ligula.
							Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque
							habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nec sapien blandit, eleifend
							turpis vitae, fringilla mi. Donec fringilla sagittis ex eget pulvinar. Pellentesque in laoreet neque, a iaculis
							erat. Nulla viverra elementum dolor, et lacinia leo elementum ac. Nullam iaculis id nulla ut rutrum. Nam est
							tellus, condimentum non sollicitudin nec, imperdiet eget massa. Sed tincidunt et augue ut tempus. Integer quis
							eleifend enim, nec lobortis lorem. Phasellus nec tellus non ex commodo tristique. Mauris vel dolor condimentum,
							porta eros in, malesuada nunc. Sed et tincidunt velit, at molestie nulla. Integer gravida et orci ac lobortis.
							Sed ut est ac libero sollicitudin imperdiet. Curabitur semper sit amet risus ut dapibus. Quisque viverra maximus
							sapien et congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam auctor cursus justo, vitae
							cursus tellus feugiat at. Sed rhoncus ex in libero aliquet rhoncus. Vivamus accumsan, ex eu dapibus bibendum,
							enim odio aliquet purus, quis mattis quam lectus quis eros. Nulla facilisi. Duis fermentum turpis non laoreet
							venenatis.
						</p>
					</div>
				</div>
			</PageTemplate>
		)
	}
}

export default HomePage
