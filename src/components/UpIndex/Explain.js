import React from 'react';
import background from 'lib/background.png';
import rect from 'lib/rect.png';
import text from 'lib/text.png';
import styled from 'styled-components';

const Div = styled.div`
    background: #034b61;
`;
const Back = styled.img`
    width:100%;
`;

const Rect = styled.img`

`;

const Text = styled.img`

`;

const Explain = () => {
    return (
        <Div>
            <Back src={background} alt="배경이미지" />
            <Rect src={rect} alt="상자" />
            <Text src={text} alt="글로벌미디어학부 알고리즘 소모임" />
        </Div>

    );
}
export default Explain;