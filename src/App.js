import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Data
import  { tasks } from "./tasks.json"; 

// component
import TaskForm from "./components/TaskForm"; 


class App extends Component {

	constructor() {
		super();
		this.state = {
			tasks
		}
		this.handleAddTask = this.handleAddTask.bind(this);
	}

	handleAddTask(task) {
    this.setState({
      tasks: [task, ...this.state.tasks]
    })
    console.log(this.state.tasks)
  }

  handleRemoveTask(index) {
		this.setState({
			tasks: this.state.tasks.filter(
			(item, i) => {
				return i !== index
			})
		})
  }

  render() {
		const tasks = this.state.tasks.map((task,i) => {
			return (
				<div className="col-md-4" key={i}>
					<div className="card mt-4">
						<div className="card-header">
							<h3>{task.title}</h3>
							<span className="badge badge-pill badge-danger ml-2">
								{task.priority}
							</span>
						</div>
						<div className="card-body">
							<p>{task.description}</p>
							<p><mark>{task.responsible}</mark></p>
						</div>
						<div className="card-footer">
							<button
								className="btn btn-danger"
								onClick={this.handleRemoveTask.bind(this, i)}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			)
		})

    return (
      <div className="App">
				
				<nav className="navbar navbar-dark bg-dark">
					<a href="" className="text-white">
						tasks
						<span className="badge badge-pill badge-light ml-2">
							{this.state.tasks.length}
						</span>
					</a>
				</nav>

    		<div className="container">
    			<div className="row">
		    		<div className="col-md-4 text-center mt-4">
		    				<TaskForm onAddTask={this.handleAddTask}></TaskForm>
		    				<img src={logo} className="App-logo" alt="logo" />
		    		</div>

	    			<div className="col-md-8">
		    			<div className="row">
		    				{tasks}
		    			</div>
	    			</div>
    			</div>
    		</div>
      </div>
    );
  }
}

export default App;
