import React from 'react';
import SearchBar from './components/SearchBar';
import unsplash from './components/unsplash-api'
import ImageList from './components/ImageList';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }


  onSearchSubmit = (term) => {
    unsplash.get('/search/photos', {
      params: {
        query: term
      },
     
    }).then((response) => {
      this.setState({ images: response.data.results })
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }

}

export default App;
