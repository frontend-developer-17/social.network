export const userObjectArray = (items,userId, objPropName, newobjProps)=>{
    return(
        items.map(u => {
            if (u[objPropName] === userId)
                return { ...u,...newobjProps}
            return u
        })

    )
}