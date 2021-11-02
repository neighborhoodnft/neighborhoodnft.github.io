import React, { Component } from 'react'
import InputNumber from 'rc-input-number';

class Mint extends Component {

  state = {
    mintQuantity: 1
  };

  handleInput = num => {
    this.setState({
    mintQuantity: num });
  };

  render() {
    return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <h1>Mint Neighborhood NFT</h1>
            <form onSubmit={(event) => {
              event.preventDefault()
              console.log(this.state.mintQuantity)
              this.props.mint(this.state.mintQuantity)
            }}>
              Mint Quantity (limit 10):
              <InputNumber value={this.state.mintQuantity} onChange={this.handleInput} />
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="MINT"
              />
            </form>
          </div>
        </main>
      </div>
    </div>
    );
  }
}

export default Mint;
