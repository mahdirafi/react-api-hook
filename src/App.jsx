 
import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FamilyTree from './Components/FamilyTree/FamilyTree'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HookForm/HookForm'
import ProductManagement from './Components/ProductManagement/ProductManagement'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UnControlledField from './Components/UnControlledField/UnControlledField'

function App() {
  

  return (
    <>
      <h2 className='text-center'>Welcome to my React App </h2>
      {/* <SimpleForm> </SimpleForm> */} 
      {/* <FormAction  /> */}
      {/* <ControlledField /> */}
      {/* <UnControlledField/> */}
      {/* <HookForm/> */}
      {/* <ProductManagement/> */}
      <FamilyTree />
    </>
  )
}

export default App
