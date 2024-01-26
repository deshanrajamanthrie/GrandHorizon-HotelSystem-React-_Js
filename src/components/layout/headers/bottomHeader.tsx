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
        detail: [{subHeader: "Desc1", listDetail: ["Python", "Java", "React"]}]
    });
    headerDetail.push({
        header: "DESTINATION",
        route: "/destination",
        detail: [
            {subHeader: "Desc2", listDetail: ["Python", "Java", "React"]},
            {subHeader: "Desc3", listDetail: ["Python", "Java", "React"]},
            {subHeader: "Desc4", listDetail: ["Python", "Java", "React"]},
        ]
    });
    headerDetail.push({
        header: "OFFERS",
        route: "/offers",
        detail: [
            {subHeader: "Desc1", listDetail: ["Python", "Java", "React"]},
            {subHeader: "Desc2", listDetail: ["Python", "Java", "React"]},
            {subHeader: "Desc3", listDetail: ["Python", "Java", "React"]},
            {subHeader: "Desc4", listDetail: ["Python", "Java", "React"]},
        ]
    });
    headerDetail.push({
        header: "EXPERIENCE",
        route: "/experience",
        detail: [{subHeader: "Desc1", listDetail: ["Python", "Java", "React"]}]
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