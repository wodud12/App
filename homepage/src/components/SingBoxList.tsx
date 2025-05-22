import styled from "styled-components";
import SingBox from "./SingBox";

const BoxContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

const data = [
    {
        title: '박스1',
        price:'2000',
    },
    {
        title: '박스2',
        price:'2000',
    },
    {
        title: '박스3',
        price:'2000',
    },
    {
        title: '박스4',
        price:'2000',
    },
]

function SingBoxList(){
    return(
        <BoxContainer>
            {
                data.map((item,idx)=>(
                    <SingBox key={idx} title={item.title} price={item.price}/>
                ))
            }
        </BoxContainer>
    )
}

export default SingBoxList;