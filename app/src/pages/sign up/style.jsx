import styled from 'styled-components';

const Bodyy = styled.body`

margin: -8px;

.body{
    background-color: rgb(43, 43, 43);
    margin: 0px;
}

/* imagem */
.background{
    position: fixed;
    margin: auto;
    width: 100%;
    height: 100%;
}

/* formulario */
.background-principal{
    width: 35vmax;
    height: 45vmax;

    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;

    border-radius: 0.7vmax;
    background: rgba(0, 0, 0, 0.35);
}

.entrar{
    font-family: Roboto;
    font-size: 2.2vmax;
    margin-top: 3vmax;
    margin-bottom: 3vmax;
    margin-left: 2.5vmax;

    color: #ffffff;

    font-weight: 300;
}

/*input de email*/
.email_or_number{
    width: 30vmax;
    height: 4vmax;
    margin-left: auto;
    margin-right: auto;
    display: flex;

    font-size: 1.5vmax;
    color: #ffffff;

    border-radius: 0.5vmax;
}

input[type="email number"]{
    background-color: #535353;
    border-style: none;

    border-radius: 0.5vmax;
}

input[type="email number"]::placeholder{
    padding-left: 1.5vmax;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-weight: 400;
    font-size: 0.9vmax;
    color: #ffffffa1;
}

/*input de senha*/
.password1{
    width: 30vmax;
    height: 4vmax;
    margin-bottom: 2vmax;
    margin-left: auto;
    margin-right: auto;
    display: flex;

    font-size: 1.5vmax;
    color: #ffffff;

    border-radius: 0.5vmax;
}

.password2{
    width: 30vmax;
    height: 4vmax;
    margin-left: auto;
    margin-right: auto;
    display: flex;

    font-size: 1.5vmax;
    color: #ffffff;

    border-radius: 0.5vmax;
}

input[type="password"]{
    background-color: #535353;
    border-style: none;

    border-radius: 0.5vmax;
}

input[type="password"]::placeholder{
    padding-left: 1.5vmax;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-weight: 400;
    font-size: 0.9vmax;
    color: #ffffffa1;
}

/* buttons */

.link-1 {
    text-decoration: none;
}

.button_entrar{
    width: 30vmax;
    height: 4.2vmax;
    margin-top: 2vmax;
    margin-left: auto;
    margin-right: auto;
    display: flex;

    border-radius: 0.5vmax;

    background-color: #E30000;
    border-style: none;

    color: #ffffff;
    font-size: 1.5vmax;
    align-items: center;
    justify-content: center;

    font-family: Roboto;
    font-weight: 300;
}

`;

export default Bodyy;