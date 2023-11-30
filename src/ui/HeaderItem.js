

export default function HeaderItem({ClassName="" , ImageUrl="", onClick = "" }){
    return (
    <div className = {ClassName}>
        <a href={ImageUrl} onClick={onClick}> </a>    
    </div>);
}