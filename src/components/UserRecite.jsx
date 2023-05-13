import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { reset } from "../redux/menueSlice";
import { useNavigate } from "react-router-dom";

const UserRecite = () => {
  const menue = useSelector((props) => props.menue.menue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetPayment = () => {
    dispatch(reset());
    navigate("/");
  };

  return (
    <Container>
      {menue.map((m) => {
        return (
          <Menue>
            <h1>Your Product is :{m.id}</h1>
            <p>${m.price}</p>
          </Menue>
        );
      })}
      <button onClick={resetPayment}>Pay</button>
    </Container>
  );
};

export default UserRecite;

const Container = styled.div``;
const Menue = styled.div``;
