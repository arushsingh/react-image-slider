import React, { Component } from 'react';
import img from './star_lord_minimal_artwork-1366x768.jpg';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [{
        id: 0,
        background: "https://ununsplash.imgix.net/photo-1434828927397-62ea053f7a35?dpr=2&fit=crop&fm=jpg&h=700&q=75&w=1050",
        text: "America",
        link: "https://unsplash.com/anthonydelanoix"
      },
      {
        id: 1,
        background: "https://images.unsplash.com/photo-1434394673726-e8232a5903b4?q=80&fm=jpg&s=b154bdf22a4885c8e2dd1b845c5fe996",
        text: "Mountains",
        link: "https://unsplash.com/aleskrivec"
      },
      {
        id: 2,
        background: "https://images.unsplash.com/photo-1432691301971-c8b920198bd7?q=80&fm=jpg&s=d6b5970179cd2bc77c3b56165da56f80",
        text: "Shore",
        link: "https://unsplash.com/intrepid"
      },
      {
        id: 3,
        background: "https://images.unsplash.com/photo-1432691301971-c8b920198bd7?q=80&fm=jpg&s=d6b5970179cd2bc77c3b56165da56f80",
        text: "greenry",
        link: "https://unsplash.com/intrepid"
      }
      ],
      newImages: [{
        id: '',
        background: '',
        text: '',
        link: ''
      }],
      activeIndex: 0,
    }

  }
  componentDidMount() {
    const newImage = Object.assign([], this.state.images);
    newImage.id = 0;
    newImage.background = this.state.images[0].background;
    newImage.text = this.state.images[0].text;
    newImage.link = this.state.images[0].link;
    this.setState({ newImages: newImage });
  }

  next = (e) => {
    e.preventDefault();
    let slide = this.state.activeIndex + 1 < this.state.images.length ? this.state.activeIndex + 1 : 0;
    this.setState({ activeIndex: slide })
    console.log(slide);
    const newImages = this.state.images[slide];
    this.setState({ newImages });
  }
  previous = (e) => {
    e.preventDefault();
    let slide = this.state.activeIndex - 1 < 0 ? this.state.images.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: slide })
    console.log(slide);
    const newImages = this.state.images[slide]
    this.setState({ newImages })
  }
  render() {
    return (
      <div className="App">
        <div className="image-slider">
          <div className="button-container">
            <button onClick={this.previous} className="left"><i className="fa fa-caret-left"></i></button>
            <button onClick={this.next} className="right"><i className="fa fa-caret-right"></i></button>
          </div>
          <img src={this.state.newImages.background} alt="" key={this.state.newImages.id} />
          <div className="image-description">
            <h3>{this.state.newImages.text}</h3>
            <p>{this.state.newImages.link}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
