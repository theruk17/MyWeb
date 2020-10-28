import React, { Component } from 'react'
import Owl from '../components/Owl'
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <div class="container">
                    <h1>หน้าแรก</h1>
                    <Owl />
                </div>
            </div>
        );
    }
}

export default Home;