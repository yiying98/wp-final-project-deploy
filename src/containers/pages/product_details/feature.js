import {
    LocalShipping,
    International,
    Warehouse,
    DukaApproved,
} from "./icons";
const feature = () => {
    return (
        <>
            <span className="shop-card-product-features" title="Duka Aproved">
                <DukaApproved />
                <span className="feature-text">Homemade</span>
            </span>

            <span className="shop-card-product-features" title="Fullfiled By Duka">
                <Warehouse />
                <span className="feature-text">Fresh</span>
            </span>

            <span className="shop-card-product-features" title="International Shipping">
                <International />
                <span className="feature-text">Shipped in 24 hours</span>

            </span>

            <span className="shop-card-product-features" title="Local Shipping">
                <LocalShipping />               
                   <span className="feature-text">Local Shippping</span>
            </span>

        </>
    )
}
export default feature;