import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions';
import CatList from './CatList'
class App extends Component {   
  componentDidMount() {
    this.props.fetchCats()
  }
  render() {
    console.log(this.props.loading)
    return (
      <div>
        <h1>CatBook</h1>
        { this.props.loading 
              ?
              <h1>Loading....</h1>
              :
            <CatList catPics = {this.props.catPics} />
        }
        
      </div>
    );
  }
}

const mSTP = state => {
  return {
    catPics: state.cats, 
    loading: state.loading 
  }
} 
const mDTP = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mSTP, mDTP)(App)

