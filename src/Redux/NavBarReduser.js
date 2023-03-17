const updatePersonFind = "personFind"
const clickFind = "findPerson"
let initialState = {
    navBarPerson: [
        {}
    ],
    newPerson: ""
}
const NavBarReduser = (state = initialState, action) => {
    switch (action.type) {
        case updatePersonFind: {
            return{
                ...state,
                newPerson:action.text
            }
        }
        case clickFind:{
           let person = state.newPerson
           return {
                ...state,
                person:state.newPerson,
                navBarPerson:[...state.navBarPerson,{ message: person }],
                 newPerson:""  }
             }
        default:
            return state

    }


}

export const updateFindPerson = (text) => {
    return { type: updatePersonFind, text: text }
}

export const clickFindPerson = () => {
    return { type: clickFind }
}
export default NavBarReduser