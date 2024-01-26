import HeaderDetail from "./headerDetail.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import styles from './header.module.css'

export interface HeaderDetails {
    header: string,
    detail: DetailObj[]
    route: string,
}

export interface DetailObj {
    subHeader: string,
    listDetail: string[]
}


interface Props {
    // callBack: () => void;
}

// @ts-ignore
const BottomHeader = (props: Props) => {
    const [isHeaderClick, setHeaderClickFn] = useState(false);
    const headerDetail: HeaderDetails[] = [];
    headerDetail.push({
        header: "HOME",
        route: "/",
        detail: [{
            subHeader: "About the Hotel",
            listDetail: ["Overview", "Explore Colombo", "Services & Facilities", "Map & Directions"]
        }]
    });

    headerDetail.push({
        header: "DESTINATION",
        route: "/destination",
        detail: [
            {subHeader: "Our Villas", listDetail: ["Colombo", "Kandy", "Galle", 'Trinco']},
            {subHeader: "Travelling", listDetail: ["Ella", "Colombo", "Kandy"]},
            {subHeader: "Adventures", listDetail: ["Pasikuda", "Thalpe", "Mirissa"]}
        ]
    });
    headerDetail.push({
        header: "OFFERS",
        route: "/offers",
        detail: []
    });
    headerDetail.push({
        header: "EXPERIENCE",
        route: "/experience",
        detail: [{subHeader: "For Kids", listDetail: ["Overview", "Adventure Zone", "Adventure Zone"]},
            {subHeader: "Health & Leisure", listDetail: ["Health Club", "Java", "Chi, The Spa"]}
        ]
    });

    const [headerList, setHeaderListFn] = useState<HeaderDetails>();
    const clickEvent = (list: HeaderDetails) => {
        setHeaderListFn(list);
        setHeaderClickFn(true);

    };
    return (
        <>
            <header
                className={'p-4 vw-100 d-flex justify-content-around align-items-center relative ' + styles.bottomHeader}>
                <nav>
                    <ul className={'fs-6 gap-5 text d-flex flex-row text-white mt-3 list-unstyled'}>
                        {headerDetail.map(((map, index) =>
                            <li onMouseEnter={() => {
                                clickEvent(map)
                            }} className={"p-3 text-black text-decoration-none"} key={index}><Link
                                style={{textDecoration: "none", color: "white"}}
                                to={map.route!}>{map.header}</Link></li>))}
                    </ul>
                </nav>
                <div className={'d-inline-flex border border-white p-1 text-white'}>FIND A HOTEL</div>
            </header>
            <div onMouseLeave={() => setHeaderClickFn(false)}>
                {isHeaderClick && <HeaderDetail headerDetails={headerList!}/>}
            </div>

        </>
    );


}
export default BottomHeader;