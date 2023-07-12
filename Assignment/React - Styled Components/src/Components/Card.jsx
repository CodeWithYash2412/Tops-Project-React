import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin: 5rem;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  `;

const CardItem = styled.div`
  width: calc(25% - 1rem);
  padding: 1rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const AddToCartButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  
`;

const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const resJson = await res.json();
        setData(resJson.products);
    };

    return (
        <CardWrapper>
            {data &&
                data.map((prod) => (
                    <CardItem key={prod.id}>
                        <ProductImage src={prod.thumbnail} alt={prod.name} />
                        <ProductName>{prod.name}</ProductName>
                        <AddToCartButton>Add to Cart</AddToCartButton>
                    </CardItem>
                ))}
        </CardWrapper>
    );
};

export default Card;
