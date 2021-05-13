import React from 'react';

class taskBoard extends React.Component {
  constructor() {
      super()
      this.state = {
          taskList: [],
          value: "",
      }
  }
  handleChange(e) {
      this.setState({value: e.target.value})
  }

  addTask() {
      this.setState({
          taskList: this.state.taskList.concat(this.state.value)
      })
  }

   render() {
       return (
           <div>
               <div>
                   <h1>タスクリスト</h1>
                   <input type="text" value={this.state.value} onChange={e => this.handleChange(e)} />
                   <button onClick={() => this.addTask()}>追加</button>
                   {/* <p>{this.state.value}</p> */}
               </div>
               <div>
                   <ul>
                       {this.state.taskList.map((task, index) => (
                           <li key={index}>{task}</li>
                       ))}
                   </ul>
               </div>
           </div>
       );
   }
}

export default taskBoard;