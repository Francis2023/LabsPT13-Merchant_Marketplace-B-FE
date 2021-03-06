import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  height: 300px;
  width: 260px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  img {
    width: 100%;
    height: 220px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    object-fit: cover;
  }

  .details {
    padding: 5px;
    background-color: #fff;

    p {
      color: gray;
    }

    h3,
    h4 {
      font-size: 16px;
      margin: 0;
    }
    h3 {
      font-weight: bold;
    }
  }
`;
export default function ProductCard({ product }) {
  return (
    <Link to={`/item/${product.id}`}>
      <Card>
        <img src={product.img} alt="market product" />

        <div className="details">
          <h4>${product.price}</h4>
          <h3>{product.title}</h3>
          <p>Location</p>
        </div>
      </Card>
    </Link>
  );
}
