export default function Button(props) {
    const {children, ...rest} = props;
    return (
        <button>{props.children}</button>
    )
}
// state 값을 바꾸면 자동으로 업뎃
// paramiter