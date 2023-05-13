import React from "react";
import { products } from "../data";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToMenue } from "../redux/menueSlice";
import { NavLink } from "react-router-dom";

const Job = (props) => {
  const menue = useSelector((props) => props.menue.menue);
  const total = useSelector((props) => props.menue.total);
  const dispatch = useDispatch();

  const pushItem = (id) => {
    const find = products.find((p) => p.id === id);
    if (menue.includes(find)) {
      alert("product already exist");
    } else {
      dispatch(addToMenue(find));
    }
  };

  return (
    <Container>
      <h1>Menue</h1>
      <span>${total}</span>
      {products.map((p) => {
        return (
          <Product>
            <img src={p.image} alt={p.title} />
            <h1>{p.title}</h1>
            <p>${p.price}</p>
            <button
              onClick={() => {
                pushItem(p.id);
              }}
            >
              Buy Now
            </button>
          </Product>
        );
      })}
      <NavLink to="/user">Go to Recite</NavLink>
    </Container>
  );
};

export default Job;

const Container = styled.div``;
const Product = styled.div``;
