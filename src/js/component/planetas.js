import React from "react";
import { Link } from "react-router-dom";

export const Planetas =()=>{
    return(
        <>
		<h1>Planetas</h1>
		<div classNameName="card-group">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col">
					<div className="card h-100">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">.</p>
						</div>
						<div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
							<div className="btn-group me-2"role="group" aria-label="First group">
								<button type="button" className="btn btn-primary">Ver Más!</button>
							</div>
							<div className="btn-group me-2" role="group" aria-label="Third group">
								<button type="button" className="btn btn-outline-warning"><i className="fa fa-heart text-warning" /></button>
							</div>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">.</p>
						</div>
						<div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
							<div className="btn-group me-2"role="group" aria-label="First group">
								<button type="button" className="btn btn-primary">Ver Más!</button>
							</div>
							<div className="btn-group me-2" role="group" aria-label="Third group">
								<button type="button" className="btn btn-outline-warning"><i className="fa fa-heart text-warning" /></button>
							</div>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">.</p>
						</div>
						<div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
							<div className="btn-group me-2"role="group" aria-label="First group">
								<button type="button" className="btn btn-primary">Ver Más!</button>
							</div>
							<div className="btn-group me-2" role="group" aria-label="Third group">
								<button type="button" className="btn btn-outline-warning"><i className="fa fa-heart text-warning" /></button>
							</div>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">.</p>
						</div>
						<div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
							<div className="btn-group me-2"role="group" aria-label="First group">
								<button type="button" className="btn btn-primary">Ver Más!</button>
							</div>
							<div className="btn-group me-2" role="group" aria-label="Third group">
								<button type="button" className="btn btn-outline-warning"><i className="fa fa-heart text-warning" /></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
    )
}
