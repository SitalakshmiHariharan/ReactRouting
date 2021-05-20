import React,{Component} from 'react';


class CourseDetail extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        const {params} = this.props.match
        return(
            <div>
                <p> I am the course detail page. You have selected {params.id}</p>
            </div>
        )
    }
}

export default CourseDetail;