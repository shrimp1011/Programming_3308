export default function Checkbox() {
    const {children,id, ...rest} = CSSStyleProperties;
    return (
        <>
        <input type="checkbox" name="" id={`chk-${id}`} className="todo__check"/>
        <label htmlFor={`chk-${id}`} className="todo__label">{children}</label>
        </>
    )
}