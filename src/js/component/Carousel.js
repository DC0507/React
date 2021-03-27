import React, { Component, Children } from "react";
import PropTypes from "prop-types";

export default function Carousel(props) {
	const { arr } = props;
	let active = "";
	return (
		<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				{arr.map((_, i) => {
					i != 0 ? (active = "active") : null;
					return <li key={i} data-target="#carouselExampleCaptions" data-slide-to={i} className={active} />;
				})}
			</ol>
			<div className="carousel-inner">
				{arr.map((item, i) => {
					i != 0 ? (active = "active") : null;
					return (
						<div key={i} className={`carousel-item ${active}`}>
							<img src="..." className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h5>First slide label</h5>
								<p>Some representative placeholder content for the first slide.</p>
							</div>
						</div>
					);
				})}
			</div>
			<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
}

Carousel.propTypes = {
	arr: PropTypes.array
};
