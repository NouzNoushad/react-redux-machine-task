import './header.scss'
import { Storefront } from '@mui/icons-material'

const Header = () => {
	return ( 
		<div className="header">
			<div className="navbar">
				<div className="title">
					<Storefront className='logo' />
					<div className="brand-name">
						ProductsMarket
					</div>
				</div>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/cart">Cart</a></li>
				</ul>
			</div>
		</div>
	 );
}
 
export default Header;