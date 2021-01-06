import React, { Component } from 'react';

//import api from './api';

class Filmes extends Component{

    state= {
        filmes: [],
    }

    async componentDidMount() {
        await fetch("/filmes")
        .then((response) => response.json())
        .then(response => response.filter(filtro => filtro.category_id === "14"))
        .then(response => this.setState({ filmes: response}), console.log)

        //console.log(response.data);

        //this.setState({ filmes: response.data});
    }

    render() {

        const {filmes} = this.state;

        return(
            <div>
                <h1>filmes</h1>

                {filmes.map(filme => ( 
                    <div key={filme.num}>
                        <div className="container">
                            <div>
                                <a href={filme.stream_id}>
                                    <div className="background-do-filme">
                                        <img src={filme.stream_icon} alt="imagem-do-filme" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Filmes;