// // create your App component here
// create an App class component from scratch
// Write a componentDidMount method. Inside the method, send a fetch request 
// to http://api.open-notify.org/astros.json, a free API that returns a list
// of people currently in space.C


import React from 'react'

class App extends React.Component{

  state = {
    peopleInSpace: ""
  }
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }


  render(){
    return(
      <div>{this.state.peopleInSpace}</div>
      
    )
  }
}

export default App