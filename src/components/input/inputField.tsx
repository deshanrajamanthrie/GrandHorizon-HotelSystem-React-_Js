import styles from './input.module.css'


interface Props {
    type: string,
    placeholder: string,
    optional?: string
}

const InputField = ({type, placeholder, optional}: Props) => {

    return (
        <>
            <section className={'d-inline-flex flex-row h-25 justify-content-between align-items-center'}>
                <input className={optional + " form-control opacity-100" + styles.inputTxt} type={type} placeholder={placeholder}
                       aria-label=".form-control-lg example"/>

            </section>
        </>
    );


}
export default InputField;