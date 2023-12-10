import React, { Component } from "react";
import "../../styles/footer.css";
import logo_footer from "../../img/logo_footer.png";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="footer">
		<div className="footer_palante">
			
			<Link to="/">
				<img src={logo_footer}></img>
          </Link>
			
		</div>
			
			
		
	</div>
);
