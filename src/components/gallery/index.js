import React, { Component } from "react"
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"

import "./gallery.css"

const PhotoItem = ({ image, group }) => (
	<div className="thumbnail-container">
		<LightgalleryItem group={group} src={image}>
			<div className="image" style={{ backgroundImage: `url(${image})` }} />
		</LightgalleryItem>
	</div>
)

class Gallery extends Component {
	render() {
		const { data, galleryName } = this.props

		return (
			<LightgalleryProvider
				lightgallerySettings={{
					thumbnails: true,
					download: false
				}}
			>
				<div className="gallery">
					{data.map((photo, id) => (
						<PhotoItem key={id} image={photo} group={galleryName} />
					))}
				</div>
			</LightgalleryProvider>
		)
	}
}

export default Gallery
