import react,{Component} from 'react';
import Base from './Home.png'

class Home extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div>
                <img src={Base}></img>
            </div>
        )
    }
}

export default Home;


