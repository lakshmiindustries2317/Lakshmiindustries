const Container = ({children,id="",class_name=""})=>{
    return (
        <div className={"w-full p-5 "+class_name} id={id}>
            {children}
        </div>
    )
}

export default Container;