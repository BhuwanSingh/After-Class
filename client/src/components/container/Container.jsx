import React from 'react'
import Board from '../board/Board'
import './style.css'

class Container extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            color:'#000000',
            size:'5',
        }
    }

    changeColor(params){
        this.setState(
            {
                color:params.target.value
            }
        )
    }

    changeSize(params){
        this.setState(
            {
                size:params.target.value
            }
        )
    }

    render(){
        return(
            <div className="container-wb">
                <div className='tools-section-wb'>
                    <div className="color-picker-container-wb">
                        Select Brush Colour:
                        <input type="color" value = {this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>

                    <div className="brushsize-container-wb" onChange={this.changeSize.bind(this)}>
                        Select Brush Size:
                        <select value={this.state.size}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h2>Want to invite more friends?</h2>
                    <h3>Tell them to join : localhost:3000{window.location.pathname}</h3>
                </div>
                <div className="board-container-wb">
                    <Board color={this.state.color} size={this.state.size} ></Board>
                </div>
            </div>
        )
    }
}

export default Container