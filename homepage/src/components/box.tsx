import styled from "styled-components";
import SingBox from "./SingBox";

const Container = styled.div`
    display : flex;
`
function Box() {
    return (
        <Container>
                <SingBox title="type!" />
                <SingBox title="Script!" />
                <SingBox title="React!" />
                <SingBox title="힘들지않아!" />
        </Container>
    )
}

export default Box;