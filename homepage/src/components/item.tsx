import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

interface itemsProps {
    item: string;
    name: string;
    text: string;
}

const SlideItem = styled.div`
    width: 100%;
    img {
        max-width: 100%;
        height: auto;
    }
`;

const items: itemsProps[] = [
    {
        item: 'https://blog.kakaocdn.net/dn/cF4JJT/btsJQXMHN9Q/OAMpeHgbnkmT7k1CkxgEfk/img.png',
        name: '이미지1',
        text: '슬라이드 1'
    },
    {
        item: 'https://blog.kakaocdn.net/dn/cF4JJT/btsJQXMHN9Q/OAMpeHgbnkmT7k1CkxgEfk/img.png',
        name: '이미지2',
        text: '슬라이드 1'
    },
    {
        item: 'https://blog.kakaocdn.net/dn/cF4JJT/btsJQXMHN9Q/OAMpeHgbnkmT7k1CkxgEfk/img.png',
        name: '이미지3',
        text: '슬라이드 1'
    },
];

function Item() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {items.map((item, index) => (
                <SlideItem key={index}>
                    <img src={item.item} alt={item.name} />
                    <p>{item.text}</p>
                    
                </SlideItem>
            ))}
        </Slider>
    );
}

export default Item;