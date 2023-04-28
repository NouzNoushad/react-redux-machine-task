import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/productsSlice";

const Details = () => {

	// fetch id from the params
	const { id } = useParams()
	
	const dispatch = useDispatch()
	const { product } = useSelector((state) => state.products)

	// dispatching the product details
	useEffect(() => {
		dispatch(getProductDetails(id))
	},[id])

	return ( 
		<div className="details">
			<Header />
				<div className="container" style={{height: '80vh'}}>
				<div className="row my-5">
					<div className="col-md-12">
							<div className="card card-body">
								{
									product.id ? <div className="main-section d-md-flex align-items-center">
									<img src={product.image} className="col-md-4 p-2" alt="..."  width={100}/>
									<div className="card-body col-md-8 ">
										<h4 className="card-title">{product.title}</h4>
										<h5>{product.category}</h5>
										<h5 className=" text-danger">${product.price}</h5>
										<p>{ product.description}</p>
									</div>
									</div> : <h2 className="w-100 text-center my-5">No Product</h2>
								}
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	 );
}
 
export default Details;