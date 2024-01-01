import { UserList } from './components/UserList'
import usuarios from './users.json'


const App = () => {
  return (
    <>
      <UserList usuarios={usuarios}/>
    </>
  )
}

export default App
