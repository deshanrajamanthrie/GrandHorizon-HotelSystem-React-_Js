import {Fragment} from "react";
import styles from './card.module.css'

interface Props {
    children: string;
    src: string
}

const Card = ({children, src}: Props) => {


    return (
        <Fragment>
            <div className={""}>
                <div className={" "+styles.cardWithOutBody}>

                    { // @ts-ignore
                        <img src={src} className={" "+styles.imgCard} alt="..."/>
                    }

                    <h5 className={'cardWithoutBody p-2'}>{children}</h5>

                </div>
            </div>
        </Fragment>
    )


}
export default Card;