import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CourseDetail from './CourseDetail';

class Products extends Component{
    constructor(){
        super()
        this.state={}            
    }  

    render(){                
        return(
            <div>
                <ul>
                    <li><Link to="/course/1">Course 1</Link></li>
                    <li><Link to="/course/2">Course 2</Link></li>
                    <li><Link to="/course/3">Course 3</Link></li>
                </ul>
            </div>
        )
    }
}

export default Products