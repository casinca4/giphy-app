import React from 'react';
import '../scss/App.scss';
import data from '../data/giphy';
import Preview from './Preview';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            url: '',
            title: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // console.log(e.currentTarget.src);
        this.setState({
            url: e.currentTarget.src,
            title: e.currentTarget.alt
        });
    }

    // currentTarget: html property where the onclick is passed, that has a src
    // setState rerenders the function render

    render() {
        const gifs = data.map(el => {
            return (<div className="gif" key={el.id}>
                <img 
                onClick={this.handleClick}
                src={el.images.original.url} 
                alt={el.title}
                ></img>
            </div>
            );
        });

        return (
            <div className="app">
                <div className="gallery">{gifs}</div>
                <Preview data={this.state}></Preview>       {/*new state; gallery kein update, da vorheriger und jetziger state is the same, React merkt das*/}
            </div>
        );
    }
}

// function App() {
//     // console.log(data);

//     const gifs = data.map(el => {
//         return (<div className="gif" key={el.id}>
//             <img src={el.images.original.url} alt={el.title}></img>
//         </div>
//         );
//     });

//     return (
//         <div className="app">
//             <div className="gallery">{gifs}</div>
//             <Preview></Preview>
//         </div>
//     );
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { selected: data[0].images.original.url }
//         this.previewChange = this.previewChange.bind(this)
//     }

//     previewChange(event) {
//         this.setState({ selected: event.currentTarget.children[1].src })
//     }

//     render() {
//         const listItems = data.map(el => {
//             return (
//                 <div className="gif-container" key={el.id} onClick={this.previewChange}>
//                     <img src={el.images.original.url}></img>
//                 </div>
//             )
//         });

//         return (
//             <div className="app">
//                 <div className="gallery">
//                     {listItems}
//                 </div>
//             </div>
//         )
//     }
// }



export default App;

// event: Bild
// currentTarget: wenn man mit der Maus da ist, man nimmt von currentTarget die src
// children:
// key: macht, daß React Sachen findet

