import { Link, Outlet } from "react-router-dom";

const Product = () => {
    return (
        <>
            <div>
                <input type="search" placeholder="Search Products" />            
            </div>
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Product;