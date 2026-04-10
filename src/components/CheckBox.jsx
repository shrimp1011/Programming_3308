export default function Checkbox() {
    const {id, ...rest} = CSSStyleProperties;
    return (
        <>
        <input type="checkbox" name="" id={`chk-${id}`} className="todo__check"/>
        <label htmlFor={`chk-${id}`} className="todo__label">제1의아해가무섭다고그리오</label>
        </>
    )
}