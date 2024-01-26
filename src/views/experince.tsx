import {Fragment} from "react";
import Card from "../components/card/card.tsx";

const Experince = () => {
    return (<Fragment>
        <section className={'vw-100 h-auto d-flex justify-content-center align-items-center flex-column'}>
            <section className={'h-25 d-flex h-100 flex-column p-5'}>
                <h2 className={'lh-lg m-0 text-center'}>Experince Something Now</h2>
                <h6>Choose from our exclusive offers, and get more from your next stay.</h6>
            </section>
            <section className={'align-items-center h-75 px-5 vw-100 row row-cols-lg-3 row-cols-3 row-cols-md-2 g-4 m-5'}>
                <Card src={'src/assets/next2.PNG'}>MULTIPLY YOUR POINTS</Card>   {/*Use Card Components*/}
                <Card src={'src/assets/next2.PNG'}>GET AWAY SAVE MORE</Card>
                <Card src={'src/assets/next2.PNG'}>EARN UP TO 130K POINT</Card>
                <Card src={'src/assets/next2.PNG'}>A NIGHT ON US</Card>
                <Card src={'src/assets/next2.PNG'}>3 NIGHT UNDER $250</Card>
                <Card src={'src/assets/next2.PNG'}>BEST VACATION</Card>
            </section>

        </section>
    </Fragment>)
}
export default Experince;