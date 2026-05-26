
import Header from './Header'
import Greet from './Greet'
import Footer from './Footer'
import Counter from './Counter'
import Goal from './Goal'
import Garage from './Garage'
import List from './List'
import Styling from './Styling'


export default function App(){
  return<>
    <Header/>
    <Greet name="Abebe"/>
    <Greet name="Kebebe"/>
    <Greet name="Sara"/>
    <Greet name="Dawit"/>
    <Footer/>
    <Counter/>
    <Goal isGoal={false} />
    <Garage cars={["BYD","BMW","Toyota"]}/>
    <List />
    <Styling/>

  </>
}