import {DetailObj, HeaderDetails} from "./bottomHeader.tsx";
import styles from './header.module.css';


interface Props {
    headerDetails: HeaderDetails;
}


const headerDetail = (props: Props) => {
    const detail: DetailObj[] = props.headerDetails.detail;
    return (
        <>
            <section className={'d-flex h-auto w-100 position-absolute z-1 bg-white'}>
                <div className={'d-flex gap-3 flex-row'}>
                    {
                        detail.map((data =>
                            <div className={'d-flex gap-2 flex-column '+styles.subColPadding}>
                                <h2>{data.subHeader}</h2>
                                {data.listDetail.map(map => <p>{map}</p>)}
                            </div>))
                    }
                </div>

            </section>
        </>
    );

}
export default headerDetail;