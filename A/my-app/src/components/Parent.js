function Parent(){
    const message="Hello ";
    return (
        <div>
            <Child message={message} />
        </div>
    )
}
function Child({message}){
return (
    <div>
        <GrandChild message={message}/>
    </div>
)
}
function GrandChild({message}){
return(
    <div>
        message:{message}
    </div>
)
}
export default Parent;