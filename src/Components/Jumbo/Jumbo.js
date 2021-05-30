import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
var button_class = "navbar-toggler";
var header_class = "header-colorfull header-horizontal header-over header-view-side";


function Jumbo(props) {
    const [profile, setprofile] = useState({});


    useEffect(() => {
        checkToken();
        async function checkToken() {
            const token = localStorage.getItem("access_token");
            await fetch("https://vegetable-store-backend.herokuapp.com/users/verifykro", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'x-access-token': token
                }
            }).then(res => res.json()).then(data => { setprofile(data) });
        }

    }, []);

    function logout() {
        console.log("YES");
        localStorage.clear();
        toast.success("Logged Out");
        setprofile({});
    }

    const [active, setActive] = useState(false);
    const cart = useSelector(state => state.cart);
    const Data = useSelector(state => state.data);
    const data = Data.data;
    const [x, setx] = useState(0);
    const cartArray = [];
    let itemsNumber = 0;
    for (const items in cart) {
        itemsNumber += cart[items];
        const index = data.findIndex(ele => ele._id === items);
        if (index !== -1 && cart[items] !== 0)
            cartArray.push({ _id: items, name: data[index].name, price: data[index].price, qty: cart[items], image: data[index].image });

    }

    let total = 0;
    cartArray.forEach(ele => {
        total += (ele.price * ele.qty);
    })
    let cartStyle = "cart-sidebar collapse";
    if (active) {
        cartStyle = "cart-sidebar collapse animation-scale-top-right";
    }
    const eventHandler = (e) => {
        if (button_class === "navbar-toggler") {
            button_class = "navbar-toggler active";
            header_class = "header-colorfull header-horizontal header-over header-view-side active"
        }
        else {
            button_class = "navbar-toggler";
            header_class = "header-colorfull header-horizontal header-over header-view-side";
        }
        setx(x + 1);
    }
    return (
        <div>
            <header className={header_class}>
                <div className="container" style={{
                    'background': 'border-box',
                }}>
                    <nav className="navbar"><Link to="/" className="navbar-brand"><span className="logo-element-line"><span className="logo-icon"><span className="svg-content svg-fill-theme" data-svg="./assets/images/svg/logo-part.svg" /></span><span className="logo-text">Frutella</span></span></Link>
                        <button className={button_class} onClick={eventHandler} type="button"><i className="fas fa-bars nav-show" /><i className="fas fa-times nav-hide" /></button>
                        <div className="navbar-collapse">
                            <div className="container" style={{
                                'background': 'border-box',
                            }}>
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                    {
                                        profile._id ?
                                            <>
                                                <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                                            </> : null}
                                    <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                                </ul>
                                <div className="navbar-extra">
                                    <ul className="actions-nav">
                                        {
                                            profile._id ?
                                                <>
                                                    <li className="nav-item"><Link className="nav-link"><i className="fas fa-user" />&nbsp;&nbsp;{profile.userName}</Link></li>
                                                    <li className="nav-item"><Link onClick={logout} className="nav-link"><i className="fas fa-user" />&nbsp;&nbsp;Logout</Link></li>
                                                </> :
                                                <>
                                                    <li className="nav-item"><Link to="/login" className="nav-link"><i className="fas fa-user" />&nbsp;&nbsp;Sign In</Link></li>
                                                    <li className="nav-item"><Link to="/signup" className="nav-link"><i className="fas fa-user" />&nbsp;&nbsp;Sign Up</Link></li>
                                                </>
                                        }

                                        <li className="nav-item"><a className="nav-link" data-show-block="cart" onClick={() => setActive(true)}><i className="fas fa-shopping-bag" /><span className="navbar-mobile">&nbsp;&nbsp;Cart</span><span className="cart-quantity"><span className="badge badge-pill badge-cart">{itemsNumber}</span></span></a></li>
                                    </ul>
                                    <div className="navbar-info">
                                        <div className="navbar-info-title">Call Us Now</div>
                                        <div className="navbar-info-value">9113476778</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <section className="after-head top-block-page with-back white-curve-after section-white-text">
                <div className="overflow-back bg-orange" />
                <div className="content-offs-stick my-5 container"
                    style={{
                        'background': 'border-box',
                    }}>
                    <div className="section-solid with-back">
                        <div className="full-block">
                            <div className="section-back-text">Frutella</div><img className="d-none d-lg-block z-index-3" src="./assets/images/content/x/mandarin.png" alt="" data-size="280px" data-at="10%;bottom 35%" style={{
                                'width': '280px',
                                'position': 'absolute',
                                'transformOrigin': '50% 50%',
                                'left': '10%',
                                'bottom': '35%',
                                'transform': 'translate(-50%, 50%)'
                            }} /><img className="d-none d-lg-block z-index-3" src="./assets/images/content/x/kiwi-blur.png" alt="" data-size="137px" data-at="right 5%;35%" style={{
                                'width': '137px',
                                'position': 'absolute',
                                'transformOrigin': '50% 50%',
                                'right': '5%',
                                'top': '35%',
                                'transform': 'translate(50%, -50%)'
                            }} /><img className="d-none d-lg-block z-index-3" src="./assets/images/content/x/shpinat-2.png" alt="" data-size="50px" data-at="65%;0%;-25deg" style={{
                                'width': '50px',
                                'position': 'absolute',
                                'transformOrigin': '50% 50%',
                                'left': '65%',
                                'top': '0%',
                                'transform': 'rotate(-25deg) translate(-50%, -50%)'
                            }} />
                        </div>
                        <div className="z-index-4 position-relative text-center">
                            <h1 className="section-title">{props.name}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className={cartStyle} data-block="cart" data-show-block-class="animation-scale-top-right" data-hide-block-class="animation-unscale-top-right"><a className="close-link" data-close-block="true" onClick={() => setActive(false)}><i className="fas fa-times" /></a>
                <div className="cart-inner">
                    <h4 className="text-title mb-2">Cart</h4>
                    <div className="separator-line mb-4" />
                    {/* <CartItem key={ele._id} name={ele.name} price={ele.price} /> */}
                    {
                        cartArray.map(ele => (
                            <CartItem key={ele._id} name={ele.name} price={ele.price} qty={ele.qty} image={ele.image} />
                        ))
                    }
                    <div className="separator-line mt-4 mb-3" />
                    <ul className="cart-totals list-titled">
                        <li><span className="list-item-title">Sub Total</span><span className="list-item-value">&#8377;{total}</span></li>
                        <li><span className="list-item-title">Shipping</span><span className="list-item-value">&#8377;10.00</span></li>
                        <li className="separator-line" />
                        <li className="cart-total"><span className="list-item-title">Total</span><span className="list-item-value">&#8377;{total + 10}</span></li>
                    </ul>
                    <Link to="/shopcart" className="w-100 mb-2 btn btn-theme-bordered">view cart&nbsp;&nbsp;&nbsp;<i className="fas fa-shopping-bag" /></Link>
                    <Link to="/checkout" className="w-100 btn btn-theme">checkout&nbsp;&nbsp;&nbsp;<i className="fas fa-shopping-cart" /></Link>
                </div>
            </div>

        </div>
    )
}
export default Jumbo;