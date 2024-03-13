import React from 'react';
import styled from 'styled-components';

const Detail =()=>{

    return(
        <Container>
            <Background>
                <img  src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09DAD6A5DAECB6BA9E329FFA896B18978FE4AD5540C070D7973EE53357DD4D24/scale?width=1440&aspectRatio=1.78&format=jpeg'/>
            </Background>

            <ImageTitle >

                <img />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    controls
                </Controls>
            </ContentMeta>
        </Container>
    )
};

const Container = styled.div`
    position : relative;
    min-height: calc(100vh-250px);
    overflow-x : hidden;
    display  : block;
    top : 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
left: 0px;
opacity: 0.8;
position: fixed;
right : 0px;
top : 0px;
z-index: -1;

    img{
        width: 100vw;
        height: 100vh;
    

    @media(max-width: 768px){
        width: initial;
    }

}
`;

const ImageTitle = styled.div`
    align-items : flex-end;
    display  : flex;
    -webkit-box-pack : start;
    justify-content : flex-start;
    margin : 0px auto;
    height : 30vw;
    min-height : 170px;
    padding-bottom: 24px;
    width : 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`

`;

const Controls = styled.div`

`;

export default Detail;

