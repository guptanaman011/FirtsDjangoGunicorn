import React, { Component } from "react";
import axios from "axios";


//GET REQUEST

class GetList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/department')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error Retrieving data'})
        })
    }

    render() {
        const { posts, errorMsg } = this.state
        return(
            <div>
                <h4>List of Posts</h4>
                {
                    posts.length ?
                    posts.map(post => <div key={post.DepartmentId}>
                       <div className="container">
                            <div className="gallery">                    
                                <div className="desc">"{post.DepartmentName}"</div>
                             </div>
                       </div>
                    </div>) : null
                }
                {errorMsg ? <div> {errorMsg} </div> : null}
            </div>
        )
    }

}

export default GetList