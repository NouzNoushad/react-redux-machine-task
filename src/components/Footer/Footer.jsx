import { Facebook, Twitter, YouTube } from "@mui/icons-material";
import './footer.scss'

const Footer = () => {
	return ( 
		<div className="footer">
			<small>
				Copyright All right reserved
			</small>
			<div className="links">
				<Facebook />
				<Twitter />
				<YouTube/>
			</div>
		</div>
	 );
}
 
export default Footer;