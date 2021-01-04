import React, { Component } from 'react';

import api from './api';

class Series extends Component{

    state= {
        Series: [],
    }

    async componentDidMount() {
        const response = await api.get('');

        console.log(response.data);

        this.setState({ Series: response.data});
    }

    render() {

        const {Series} = this.state;

        return(
            <div>
                <h1>series</h1>

                {Series.map(serie => ( 
                    <div key={serie.num} >
                        <img src={serie.cover} alt="imagem-do filme" />
                    </div>
                ))}
            </div>
        )
    }
}

export default Series;