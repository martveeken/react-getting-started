import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {data: [
            {id: 1, name: "Bob"},
            {id: 2, name: "Mart"},
            {id: 3, name: "Frenk"},
            {id: 4, name: "Joop"},
            {id: 5, name: "Tristan"},
            {id: 6, name: "Jan"},
        ]}
    }
    render(){
        let rows = this.state.data.map( person => {
            return <PersonRow key={person.id} data={person} />
        })
        return <table>
                    <tbody>{rows}</tbody> 
                </table>
    }
}

const PersonRow = (props) => {
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        </tr>
}

export default App
