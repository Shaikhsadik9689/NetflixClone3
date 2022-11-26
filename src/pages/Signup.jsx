import React from 'react';
import styled from "styled-components";
import Backgroundimage from '../components/Backgroundmage';
import Header from '../components/Header';

const Signup = () => {
    return (
        <div>
            <Container>
                <Backgroundimage/>
                <div className='content'>
                <Header login/>
                <div className='body flex column a-center j-center'>
                    <div className='text flex column'>
                        <h1>Unlimeted Movies, TV Show and More</h1>
                        <h4>Watch anywhere. cancel anytime</h4>
                        <h6>
                            Ready to watch? Enter Your email to create or restart membership
                        </h6>
                    </div>
                    <div className='from'>
                        <input type="email" placeholder='Email address' name='email' />
                        <input type="password" placeholder='Password' name='password' />
                        <button>Get Start</button>
                    </div>
                    <button>Log In</button>
                </div>
                </div>
            </Container>
        </div>
    );
};

const Container = styled.div`
  position: relative;
  .content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: raba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows:15vh 85vh;
  }
`;
export default Signup;
