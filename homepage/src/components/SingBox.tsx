import styled from "styled-components";

interface Props{
    title: string;
    price: string;
    imgContent: string;
}
const BoxWrapper = styled.div`
    background-color : #f1f1f1;
    padding: 40px;
    text-align: center;
    border-radius : 8px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
`
function SingBox({title}:Props){

    return(
        <BoxWrapper>
            <img src={imgContent} alt="" />
            <h1>{title}</h1>
            <p>{price}</p>
            
        </BoxWrapper>
    )
}

export default SingBox;