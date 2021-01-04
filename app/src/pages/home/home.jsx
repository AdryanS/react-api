import React, {Component} from 'react';

import background from '../../components/img/background.jpg';
import tv from '../../components/img/television.png';
import camera from '../../components/img/camera-film.png';
import claquete from '../../components/img/clapperboard.png';

import {Link} from 'react-router-dom'

import Bodyy from './style';

class home extends Component{
    render() {
        return(
            <Bodyy>
                <img src={background} className="background" alt="Background"/>
                <div className="background-principal">
                    <div className="dive">
                        <div className="aling-itens">
                            <Link to="#" >
                                <button className="button">
                                    <div>
                                        <img src={tv} alt="televisao"/>
                                        <p>canais de tv</p>
                                    </div>
                                </button>
                            </Link>

                            <Link to="/filmes" >
                                <button className="button">
                                    <div>
                                        <img src={camera} alt="camera"/>
                                        <p>filmes</p>
                                    </div>
                                </button>
                            </Link>
                        
                            <Link to="/series" >
                                <button className="button">
                                    <div>
                                        <img src={claquete} alt="series"/>
                                        <p>series</p>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Bodyy>
        )
    }
}


export default home;