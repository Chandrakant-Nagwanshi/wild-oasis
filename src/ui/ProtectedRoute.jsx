import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. load authenticate the user
  const { isLoading, isAuthenticated } = useUser();
  //2.if there is no Authenticate user then redirect to the  /login

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  //3. while  loading show spinner
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  //4.if there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
