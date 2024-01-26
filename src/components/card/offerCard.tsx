
const OfferCard = () => {
    return(
        <>
            <div className="card">
                <img src="src/assets/h02.PNG" className="card-img-top" alt="..."/>
                <div className="d-flex justify-content-center align-items-center flex-column p-4 ms-0">
                    <p className="card-title text-center ms-0">Rooms & Suites</p>
                    <h6 className={'.fs-6 text text-center'}>Shangri–La Circle Exclusive Member Rate with
                        Breakfast</h6>
                    <p className={'.fs-6 text text-center'}>Exclusive Member Rate with Breakfast for Shangri-La
                        Circle member.</p>

                    <h6 className={'.fs-6 text text-center mt-5'}>From LKR 57,331.80 Average Per Night</h6>
                    <button className={'viewButton-OnOffers'}>View Details</button>
                </div>
            </div>
        </>
    );

}
export default OfferCard;