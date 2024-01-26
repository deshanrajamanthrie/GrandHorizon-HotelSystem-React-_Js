import {Fragment} from "react";


interface Props {
    children: string;
    src: string
}

const Card = ({children, src}: Props) => {


    return (
        <Fragment>
            <div className="col">
                <div className="card">

                    { // @ts-ignore
                        <img src={src} className="card-img-top" alt="..."/>
                    }

                    <h5 className={'cardWithoutBody p-2'}>{children}</h5>

                </div>
            </div>
        </Fragment>
    )


}
export default Card;