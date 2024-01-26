import {Fragment} from "react";
import OfferCard from "../components/card/offerCard.tsx";

const Offers = () => {

    return (
        <Fragment>
            <section className={'vw-100 h-auto d-flex justify-content-center align-items-center flex-column'}>
                <section className={'h-25 d-flex h-100 flex-column p-5'}>
                    <h2 className={'lh-lg m-0 text-center'}>Our Offers </h2>
                    <p className={'text-center px-5'}>Hotel offers provide guests with exclusive deals and discounts to
                        enhance their stay. These promotions often include reduced room rates, special packages with
                        added amenities like meals or spa services, and seasonal or event-based discounts</p>
                </section>
                <section
                    className={'d-flex h-auto p-5 justify-content-between align-items-center gap-5'}>
                    {/*<div className="card">
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
                    </div>*/}
                    <OfferCard src={'src/assets/h02.PNG'}
                               topic={'Rooms & Suites'}
                               children={'Grand-Horizon Circle Exclusive Member Rate with Breakfast'}
                               description={'Exclusive Member Rate with Breakfast for Grand-Horizon Circle member.'}
                               lastDescription={'From LKR 57,331.80 Average Per Night'}/>
                    <OfferCard src={'src/assets/h02.PNG'}
                               topic={'Rooms & Suites'}
                               children={'Grand-Horizon Circle Exclusive Member Rate.'}
                               description={'Exclusive Member Rate for Grand-Horizon Circle member.'}
                               lastDescription={'From LKR 50,961.60 Average Per Night'}/>
                    <OfferCard src={'src/assets/h02.PNG'}
                               topic={'Dinning'}
                               children={'Weekend Brunch and Rooms, at the Central'}
                               description={'A global gastronomic journey awaits you with our Weekend brunch at Central.'}
                               lastDescription={'From LKR 57,331.80 Average Per Night'}/>


                </section>
            </section>
        </Fragment>
    );


}
export default Offers;