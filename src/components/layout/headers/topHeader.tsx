import {Fragment} from "react";
import styles from './header.module.css';

const TopHeader = () => {
    return (
        <Fragment>
            <header
                className={'vw-100 bg-white bg-light d-flex justify-content-center align-items-center ' + styles.topHeader}>
                <section className={'h-100 p-1 d-flex w-100 border justify-content-around border-black'}>
                    <div className={'w-25'}>
                        <img className={'w-25 h-100'} src="src/assets/logoHotel.PNG" alt="alt"/>
                    </div>
                    <div
                        className={'fw-normal mt-3 w-50 d-inline-flex flex-row align-items-center justify-content-evenly ' + styles.cursorPointer}>
                        <p className={'px-2'}>Sing In</p>
                        <p className={'px-2'}>Join Now</p>
                        <p className={'px-2'}>Find Reservation</p>
                        <p className={'px-2'}>English</p>
                        <p className={'px-2'}>LKR</p>
                        <p></p>

                    </div>
                </section>
            </header>
        </Fragment>
    )
}
export default TopHeader;