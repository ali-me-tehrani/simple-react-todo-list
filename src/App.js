import React from 'react';
import './App.css';
import { connect } from "react-redux"
import { List } from "./component/list"

import { addTask, toDoing, toDone, Archive, initTaskList} from "./actions/toDoList"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    }
  }

  componentDidMount(){
    let list = JSON.parse(localStorage.getItem("list"))
    console.log("get list ?!", list);
    this.props.initTaskList(list)
  }

  inputOnchangeHandler(event) {
    this.setState({ item: event.target.value })
  };

  addToList(event) {
    event.preventDefault()
    this.props.addToDo(this.state.item)
    this.setState({ item: "" })
  }

  test(element) {
    this.props.toggleTaskState(element.title)
  }

  render() {
    return (
      <div className="App">
        <main>
          
          <form onSubmit={(event)=>this.addToList(event)}>
            <input type="text" onChange={(event) => this.inputOnchangeHandler(event)} value={this.state.item} />
            <input type="submit" className="btn btn-primary m-3" onClick={(event) => this.addToList(event)} value="submit" />
          </form>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3>todo</h3>
                <List state={"TODO"} toggleTaskState={(element) => this.props.toDoing(element.title)} taskList={this.props.taskList} />
              </div>
              <div className="col-md-4">
                <h3>doing</h3>
                <List state={"DOING"} toggleTaskState={(element) => this.props.toDone(element.title)} taskList={this.props.taskList} />
              </div>
              <div className="col-md-4">
                <h3>done</h3>
                
                <List state={"DONE"} toggleTaskState={(element) => this.props.Archive(element.title)} taskList={this.props.taskList} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initTaskList:(list)=>{
      dispatch(initTaskList(list))
    },
    toDoing: (title) => {
      dispatch(toDoing(title))
    },
    toDone: (title) => {
      dispatch(toDone(title))
    },
    Archive: (title) => {
      dispatch(Archive(title))
    },
    addToDo: (title) => {
      dispatch(addTask(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)