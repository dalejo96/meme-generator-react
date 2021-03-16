import * as React from 'react'
import styled from 'styled-components'
export const Footer = () => {
    const Footer = styled.footer`
        background: #DB7093;
        background: -webkit-linear-gradient(to right, #DEBAC6, #A3546E);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #DEBAC6, #A3546E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        border-radious:15px;
        height: 100px;
        display: flex;
        align-items: center;
        margin-top:10px;
    `;

    const Image = styled.img`
        height: 80%;
        margin-left: 10%;
        margin-top: 10px;
    `;

    const P = styled.p`
        font-family: VT323, monospace;
        color: whitesmoke;
        font-size: 50px;
        margin-left: 60px;
        float: left;
        margin-top: 0;
        margin-bottom: 1rem;
    `;

    return (
        <Footer>
            <Image src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Problem?" />
            <P> Meme Generator</P>
        </Footer>
    )
}