import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <Container>
        <div className='wel'>
            <h1>Welcome to log in page pe kam karo</h1>
            <h2>ho gaya</h2>
        </div>
        </Container>
    );
};
const Container = styled.div`
.wel{
    text-Align: center;
    margin-Top: 300px;
    font-size: 50px;
}
.wel:hover{
    box-shadow: inset 1500px 0 0 0 #54b3d6;
    color: white;
    transform: scaleX(0.5) scaleY(1);

`

export default Login;