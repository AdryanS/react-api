import styled from 'styled-components'

const Bodyy = styled.body`
    margin: -8px;
    padding: 0px;

.background{
    position: fixed;
    margin: auto;
    width: 100%;
    height: 100%;
}

.background-principal{
    width: 80vmax;
    height: 40vmax;

    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;

    border-radius: 0.7vmax;
    background: rgba(0, 0, 0, 0.35);
}

.align-items{
    flex: 1px;
}

.dive{
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    margin-left: auto;
    margin-right: auto;

    margin-top: 12.5vmax;
    margin-bottom: 12.5vmax;
}

.button{
    width: 22vmax;
    height: 15vmax;

    border-radius: 2vmax;
    border-style: none;

    margin-left: 1.5vmax;
    margin-right: 1.5vmax;

    background: rgb(255,0,0);
background: linear-gradient(141deg, rgba(255,0,0,1) 0%, rgba(255,184,0,1) 100%);

    div{

        position: static;
        
        p{
            font-size: 1.2rem;
            color: #f4f4f4;

            font-family: Roboto;
            font-weight: 500;
        }
        img{
            height: 7vmax;
            width: 7vmax;
        }
    }
}
`;

export default Bodyy;