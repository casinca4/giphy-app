import React from 'react';
import data from '../data/giphy';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: data[0].images.original.url }
        this.previewChange = this.previewChange.bind(this)
    }

    previewChange(event) {
        this.setState({ selected: event.currentTarget.children[1].src })
    }

    render() {
        const listItems = data.map(el => {
            return (
                <div className="gif-container" key={el.id} onClick={this.previewChange}>
                    <img src={el.images.original.url}></img>
                </div>
            )
        });

        return (
            <div className="app">
                <div className="gallery">
                    {listItems}
                </div>
            </div>
        )
    }
}



export default App;

// event: Bild
// currentTarget: wenn man mit der Maus da ist, man nimmt von currentTarget die src
// children:
// key: macht, daß React Sachen findet