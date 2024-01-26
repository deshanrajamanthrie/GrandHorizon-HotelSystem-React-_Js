import InputField from "../components/input/inputField.tsx";
import Button from "../components/button/button.tsx";

const Home = () => {

    return (
        <>
            <section className={'vw-100 h-100 border border-danger allBody'}>
                <div id="carouselExample" className="carousel slide position-relative">
                    <div className="carousel-inner">
                        <div className="carousel-item active vh-100">
                            <img src="src/assets/hhome1.PNG" className="d-block homeImg" alt="2"/>
                        </div>
                        <div className="carousel-item h-100">
                            <img src="src/assets/h02.PNG" className="d-block homeImg" alt="3"/>

                        </div>
                        <div className="carousel-item">
                            <img src="src/assets/s032.PNG" className="d-block homeImg" alt="3"/>
                        </div>
                        <div className={'vw-100 text-center'}>
                            <h1 className={'position-absolute text-white homePageText'}>HOTEL GRAND-HORIZON</h1>
                        </div>
                        <section className={'position-absolute homeInputArea opacity-75'}>
                            <InputField type={'date'} placeholder={'Start Date'} optional={'opacity-100'}/>
                            <InputField type={'date'} placeholder={'End date'}/>
                            <InputField type={'number'} placeholder={'Adult'}/>
                            <InputField type={'number'} placeholder={'Children'}/>
                            <InputField type={'text'} placeholder={'Special Code'}/>
                            <Button size={'home-Button '} color={''} callBack={() => alert("Conformed")}>SEARCH</Button>
                        </section>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
        </>
    );


}
export default Home;