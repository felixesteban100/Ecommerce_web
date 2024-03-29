import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/LoadingError/Loading";
import { createProductReview, listProductDetails } from "../Redux/Actions/ProductActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/ProductConstants";
import moment from "moment";

const SingleProduct = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productCreateReview = useSelector((state) => state.productCreateReview);
  const { 
    loading: loadingCreateReview, 
    error: errorCreateReview, 
    success: successCreateReview 
  } = productCreateReview;

  useEffect(() => {
    if (successCreateReview) {
      alert("Review Submitted");
      setRating()
      setComment()
      dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
    }
    dispatch(listProductDetails(productId));
  },[dispatch, productId, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  }

  const submitHandler = (e) => { 
    e.preventDefault();
    dispatch(createProductReview(productId, {
      rating,comment,
    }))
  }

  return (
    <>
      <Header />
      <div className="container single-product">
        {
            loading ? (
              <div className="mb-5">
                <Loading />
              </div>
            ) : error ? <Message variant="alert-danger">{error}</Message>
              : (
              <>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-dtl">
                      <div className="product-info">
                        <div className="product-name">{product.name}</div>
                      </div>
                      <p>{product.description}</p>

                      <div className="product-count col-lg-7 ">
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Precio</h6>
                          <span>${product.price}</span>
                        </div>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Estado</h6>
                          {product.countInStock > 0 ? (
                            <span>Disponible</span>
                          ) : (
                            <span>No disponible</span>
                          )}
                        </div>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Reseñas</h6>
                          <Rating
                            value={(product.reviews.length > 0) ? product.rating : 5}
                            text={`${(product.reviews.length > 0) ? product.numReviews : 0} reviews`}
                          />
                        </div>
                        {product.countInStock > 0 ? (
                          <>
                            <div className="flex-box d-flex justify-content-between align-items-center">
                              <h6>Cantidad</h6>
                              <select value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <button 
                            onClick={AddToCartHandle}
                            className="round-black-btn">Añadir al carrito</button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RATING */}
                <div className="row my-5">
                  <div className="col-md-6">
                    <h6 className="mb-3">RESEÑAS</h6>
                    {product.reviews.length === 0 && (
                      <Message variant={"alert-info mt-3"}>Sin reseñas</Message>
                    )}
                    
                    {
                      product.reviews.map((review)=>(
                        <div key={review._id} className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                          <strong>{review.name}</strong>
                          <Rating value={review.rating}/>
                          <span>{moment(review.createdAt).calendar()}</span>
                          <div className="alert alert-info mt-3">
                            {review.comment}
                          </div>
                        </div>
                      ))
                    }

                  </div>
                  <div className="col-md-6">
                    <h6>ESCRIBE UNA RESEÑA DE CLIENTE</h6>
                    <div className="my-4">
                      {loadingCreateReview && <Loading />}
                      {errorCreateReview && (
                        <Message variant="alert-danger">{errorCreateReview}</Message>
                      )}
                    </div>

                    {userInfo ? (
                        <form onSubmit={submitHandler}>
                          <div className="my-4">
                            <strong>Puntuación</strong>
                            <select 
                              value={rating} 
                              onChange={(e) => setRating(e.target.value)}
                              className="col-12 bg-light p-3 mt-2 border-0 rounded"
                            >
                              <option value="">Selecciona...</option>
                              <option value="1">1 - Pobre</option>
                              <option value="2">2 - Justa</option>
                              <option value="3">3 - Buena</option>
                              <option value="4">4 - Muy buena</option>
                              <option value="5">5 - Excelente</option>
                            </select>
                          </div>
                          <div className="my-4">
                            <strong>Comentario</strong>
                            <textarea
                              row="3"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              className="col-12 bg-light p-3 mt-2 border-0 rounded"
                            ></textarea>
                          </div>
                          <div className="my-3">
                            <button disable={loadingCreateReview} className="col-12 bg-black border-0 p-3 rounded text-white">
                              ENVIAR
                            </button>
                          </div>
                        </form>
                      )
                      :
                      (
                        <div className="my-3">
                          <Message variant={"alert-warning"}>
                            Por favor{" "}
                            <Link to="/login">
                              " <strong>Iniciar sesión</strong> "
                            </Link>{" "}
                            para escribir una reseña{" "}
                          </Message>
                        </div>
                      )
                    }

                  </div>
                </div>
              </>
            )
        }
      </div>
    </>
  );
};

export default SingleProduct;
