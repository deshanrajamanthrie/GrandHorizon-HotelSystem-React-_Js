

interface Props {
    children?: JSX.Element | JSX.Element[] | string,
    size?: string,
    color?: string,
    optional?: string
    callBack: () => void
}


const Button = (props: Props) => {

    return (
        <>
            <button className={'text-white ' + props.size + props.color + props.optional}
                    onClick={props.callBack}>{props.children}</button>

        </>
    )

}
export default Button;