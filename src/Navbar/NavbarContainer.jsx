import { connect } from 'react-redux'
import { clickFindPerson, updateFindPerson } from '../Redux/NavBarReduser'
import Navbar from './Navbar'

/*const NavbarContainer = (props) => {

   
    return (
        <MyContext.Consumer>
            {
            (Store) =>{
           
          
            const onPersonChange = (text) => {

                Store.dispatch(updateFindPerson(text))
            }
        
            const clickPerson = () => {
                Store.dispatch(clickFindPerson())
            }

               return <Navbar onPersonChange={onPersonChange} arrayPerson={Store.getState().navBar} clickFindPerson={clickPerson} />
            
             }
            
            }
      
      
       </MyContext.Consumer>
            

    )
}*/
const mapStateToProps = (state) =>{
    
   return { arrayPerson: state.navBar}

}
const mapDispatchToProps = (dispatch)=>{
  return  {
    onPersonChange: (text) =>{
       dispatch(updateFindPerson(text))
    },
    clickFindPerson:()=>{
        dispatch(clickFindPerson())
    }

}
}

const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)
export default NavbarContainer
