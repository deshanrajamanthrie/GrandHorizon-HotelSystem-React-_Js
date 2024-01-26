import styles from './card.module.css'
import {Fragment} from "react";


interface Props {
    src: string,
    topic: string,
    children: string,
    description: string,
    lastDescription?: string,
    callBack?: () => void
}


const OfferCard = ({topic, children, src, description, lastDescription, callBack}: Props) => {
    return (
        <Fragment>
            <div className={"card " + styles.offerCard}>
                {
                    <img src={src} className={styles.offerCardImage} alt="..."/>
                }
                <div className="d-flex justify-content-center align-items-center flex-column p-4 ms-0">
                    <p className="card-title text-center ms-0">{topic}</p>
                    <h6 className={'.fs-6 text text-center'}>{children}</h6>
                    <p className={'.fs-6 text text-center'}>{description}</p>
                    <h6 className={'.fs-6 text text-center mt-5'}>{lastDescription}</h6>
                    <button className={'viewButton-OnOffers ' + styles.viewButtonOnOffers} onClick={callBack}>View
                        Details
                    </button>
                </div>
            </div>
        </Fragment>
    );

}
export default OfferCard;