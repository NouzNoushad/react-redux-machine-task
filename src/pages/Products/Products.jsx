import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productsSlice";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import './products.scss'

const Products = () => {

	const [search, setSearch] = useState('')
	const [page, setPage] = useState(1)

	let [searchProduct, setSearchProduct] = useState([])
	let [productCategories, setProductCategories] = useState([])
	
	const { products } = useSelector((state) => state.products)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	// search products, compare text input with product title
	const handleSearch = (e) => {
		const searchInput = e.target.value.toLowerCase()
		
		setSearchProduct(products.filter((product) =>  product.title.toLowerCase().includes(searchInput)))
		return setSearch(searchInput)
	}

	// category search, filter using category
	const handleCategorySearch = (selectedCategory) => {
		if (selectedCategory.toLowerCase() == 'all') {
			setSearchProduct(products)
		}
		else {
			setSearchProduct(products.filter((product) => product.category.toLowerCase() == selectedCategory.toLowerCase()))
		}
		
	}

	// pagination, set selected page
	const handlePage = (pageSelected) => {
		if (pageSelected >= 1 && pageSelected <= products.length / 10 && pageSelected !== page) {
			setPage(pageSelected)
		}
	}

	// dispatching products
	useEffect(() => {
		dispatch(getProducts())
	}, [])

	// updating products while searching
	useEffect(() => {
		setSearchProduct(products)
		setProductCategories(['All',...new Set(products.map((product) => product.category.toUpperCase()))])
	}, [products])

	return ( 
		<div className="products">
			<Header />
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-12">
						<div className="search-fields">
							<select className="select-container" defaultValue='Select Categories'>
								<option disabled>Select Categories</option>
								{
									productCategories.map((product) => (
										<option key={product} onClick={() => handleCategorySearch(product)}>{ product }</option>
									))
								}
								
							</select>
							
							<div className="search-container">
								<input type="text" name="search" className="search-input" value={search} onChange={handleSearch} />
								<Search className="search-icon"/>
							</div>
						</div>
						<div className="card card-body">
							<div className="main-section">
								<div className="row row-cols-1 row-cols-md-4 g-4">
									{
										(searchProduct.length > 0) ? searchProduct.slice(page * 12 - 12, page * 12).map((product) => (
													<div className="col" key={product.id}>
														<div className="card h-100" >
															<img src={product.image} className="card-img-top p-2" alt="..." height='250px'/>
															<div className="card-body">
																	<h5 className="card-title">{product.title.substring(0, 15)}</h5>
																	<div>{product.category}</div>
																<p className=" text-danger">${product.price}</p>
																<div className="btn btn-outline-primary w-100" onClick={() => navigate(`/${product.id}`)}>Details</div>
															</div>
														</div>
												</div>
											)) : <h2 className="w-100 text-center">No Products</h2>
										}
										<nav aria-label="Page navigation example">
										<ul className="pagination">
											<li className="page-item" onClick={() => handlePage(page - 1)}><a className="page-link" href="#">Previous</a></li>
											{
												[...Array(products.length / 10)].map((_, i) => {
													return <li className="page-item" key={i} onClick={() => handlePage(i+1)}><a className="page-link" href="#">{ i + 1}</a></li>
												})
											}
											
											
											<li className="page-item" onClick={() => handlePage(page + 1)}><a className="page-link" href="#">Next</a></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			
			<Footer/>
		</div>
	 );
}
 
export default Products;