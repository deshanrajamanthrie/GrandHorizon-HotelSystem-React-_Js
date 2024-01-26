import {useState} from "react";
import "./destination.css"

interface Destination {
    header: string,
    image: string,
    desc: string
}

const Destination = () => {
    const img = "src/assets/anantharaHotel.PNG";
    const img2 = "src/assets/luxury03.PNG";
    const img3 = "src/assets/hotel.PNG";
    const img4 = "src/assets/mid02.PNG";
    const img5 = "src/assets/h8.PNG";
    const desOne = "Dive into the most candid experience with the ocean at our house reef with an awe-inspiring diversity of underwater life.";
    const desTwo = "A Five-Star nature resort that is rich in history, architecture and biodiversity spanning 27 acres of lush greenery. Located in the epicentre of the cultural triangle; our resort offers an awe-inspiring culture to explore, amidst the numerous wildlife .";
    const desThree = "Experience affordable rustic barefoot type elegance, which is designed to reflect the rural environs and simplicity of the local village life surrounded by rich biodiversity";
    const desFour = "Cinnamon Velifushi Maldives, a one-resort island for sun, activity, relaxation and luxury surrounded by exotic marine life and a swimmable lagoon.";
    const desFive = "Dive into the most candid experience with the ocean at our house reef with an awe-inspiring diversity of underwater life.";
    const destinationList: Destination[] = [];
    destinationList.push({header: "Galle Grand Horizon", image: img, desc: desOne});
    destinationList.push({header: "Mathara Grand Horizon", image: img2, desc: desTwo});
    destinationList.push({header: "Gampaha Grand Horizon", image: img3, desc: desThree});
    destinationList.push({header: "Negombo Grand Horizon", image: img4, desc: desFour});
    destinationList.push({header: "Kaluthara Grand Horizon", image: img5, desc: desFive});
    let [destination, setDestination] = useState<Destination>(destinationList[0]);

    const onselectData = (des: any) => {

        for (let destination1 of destinationList) {
            if (destination1.header === des.target.value) {
                setDestination(destination1);
                break;
            }
        }
    }

    return (
        <main id={"destination"}>

            <section className={'selectSection'}>
                <select onChange={(data) => {
                    onselectData(data)
                }}>
                    {destinationList.map((data) => <option value={data.header}>{data.header}</option>)}
                </select>
            </section>

            <section>
                <section>
                    <img src={destination.image} alt=""/>
                    <aside>
                        <h2>{destination.header}</h2>
                        <p>{destination.desc}</p>
                        <button className={"destinationButton"}>Discover More..</button>
                    </aside>
                </section>
            </section>
        </main>
    );


}
export default Destination;