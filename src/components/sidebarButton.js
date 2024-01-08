function SidebarButtons({text,icon,url}){
    return(
        
        <button type="button" className=" flex flex-row items-center" title="{text}">
            {icon}<p>
                {text}
            </p>
        </button>
    )
}
export default SidebarButtons;