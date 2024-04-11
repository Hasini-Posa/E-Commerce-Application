import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Cart from '../Private/Customer/Cart';
import Wishlist from '../Private/Customer/Wishlist';
import SellerDashboard from '../Private/Seller/SellerDashboard';
import AddProduct from '../Private/Seller/AddProduct';
import Home from '../Public/Home';
import Explore from '../Private/Customer/Explore';
import AddAddress from '../Private/Common/AddAddress';
import EditProfile from '../Private/Common/EditProfile';
import Login from '../Public/Login';
import Register from '../Public/Register';
import VerifyOTP from '../Public/VerifyOTP';
import App from '../App';

const AllRoutes = () => {
 const user={
    
    userid : "123",
    userName : "abc",
    role : "CUSTOMER",
    authenticated : false,
    accessExpiration : 3600,
    refreshExpiration : 1296000
 }

const {role,authenticated} =user;
let routes=[];

if(authenticated){
    if(role=='CUSTOMER'){

   
    routes.push(<Route key={"Cart"} path='/Cart' element={<Cart/>}/>)
    routes.push(<Route key={"WishList"} path='/WishList' element={<Wishlist/>}/>)
   
}
else if(role=='SELLER'){
    routes.push(<Route key={"SellerDashboard"} path='/sellerDashboard' element={<SellerDashboard/>}/>)
    routes.push(<Route key={"Add Product"} path='addProduct' element={<AddProduct/>}/>)
}
routes.push(<Route key={"Home"} path='/' element={<Home/>}/>)
routes.push(<Route key={"Explore"} path='/explore' element={<Explore/>}/>)
routes.push(<Route key={"Add Address"} path='/addAddress' element={<AddAddress/>}/>)
routes.push(<Route key={"Edit Profile"} path='/editProfile' element={<EditProfile/>}/>)
}
else{

    routes.push(<Route key={"Home"} path='/' element={<Home/>}/>)
    routes.push(<Route key={"Login"} path='/login' element={<Login/>}/>)
    routes.push(<Route key={"Register"} path='/register' element={<Register/>}/>)
    routes.push(<Route key={"VerifyOtp"} path='/verifyOTP' element={<VerifyOTP/>}/>)
}

    return <Routes> <Route path='/' key={"App"} element={<App/>}>{routes}</Route> </Routes>

}
export default AllRoutes

