import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS, NEIGHBORHOOD_ABI, NEIGHBORHOOD_ADDRESS } from './config'
import Mint from './Mint'

//Some good notes here: https://github.com/rene78/erc-721

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "https://ropsten.infura.io/v3/1eb1d5d85a214024b363b8e07138f02e")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    this.setState({ todoList })
    const taskCount = await todoList.methods.taskCount().call()
    this.setState({ taskCount })
    for (var i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call()
      this.setState({
        tasks: [...this.state.tasks, task]
      })
    }
    this.setState({ loading: false })

    // NEIGHBORHOOD contract
    const neighborhood = new web3.eth.Contract(NEIGHBORHOOD_ABI, NEIGHBORHOOD_ADDRESS)
    this.setState({ neighborhood })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      taskCount: 0,
      tasks: [],
      loading: true
    }

    this.createTask = this.createTask.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  createTask(content) {
    this.setState({ loading: true })
    this.state.todoList.methods.createTask(content).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  toggleCompleted(taskId) {
    this.setState({ loading: true })
    this.state.todoList.methods.toggleCompleted(taskId).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  mint(mintQuantity) {
    // this.setState({ loading: true }) // Why is this.setState not a function in browser?
    const mintEthValue = mintQuantity * 50000000000000000

    this.state.neighborhood.methods.mint(mintQuantity).send({ from: this.state.account, value: mintEthValue })
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <Mint
                  account={this.state.account}
                  mint={this.mint}
                  state={this.state}/> // Why do I have to do this?
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
