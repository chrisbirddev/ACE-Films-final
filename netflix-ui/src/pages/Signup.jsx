import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import "../css/AppStart.css";

const Container = styled.div``;

const Background = styled(BackgroundImage)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Body = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  color: white;
  background: rgba(0, 0, 0, 0.5); /* Set background color with transparency */
  padding: 2rem; /* Add padding for better visibility */
`;


const Text = styled.div`
  gap: 1rem;
  text-align: center;
  font-size: 2rem;
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: ${({ showPassword }) =>
    showPassword ? "1fr 1fr" : "2fr 1fr"};
  width: 60%;
  max-width: 600px;
  margin: auto; /* Center the form horizontally */
  input {
    color: black;
    border: none;
    padding: 1.5rem;
    font-size: 1.2rem;
    border: 1px solid black;
    &:focus {
      outline: none;
    }
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bolder;
  font-size: 1.05rem;
`;

const Footer = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Copyright = styled.div`
  text-align: right;
  padding-left: 25px;
`;

const Columns = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 150px;
  text-align: left;
  padding: 0 10px;
  margin-top: 20px;
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
`;

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setIsAuthenticated(!!currentUser);
    });

    return () => unsubscribe(); // Cleanup the subscription on component unmount
  }, []);

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);

      // Instead of using useEffect, handle navigation directly here
      onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) {
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Perform navigation after the component has rendered
    if (isAuthenticated) {
      setTimeout(() => {
        navigate("/");
      }, 0);
    }
  }, [isAuthenticated, navigate]);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/"); // Redirect to Netflix page if already logged in
  });

  return (
    <Container>
      
      <AppContainer>
        <Header login />
        <Body className="content">
          <Text className="content">
            <h1>Unlimited films!</h1>
            <h2>Just £3.99</h2>
            <h3>Sign in or click to Sign Up Now</h3>
            <h4>Cancel any time</h4>
          </Text>
          <Form showPassword={showPassword}>
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="email"
              value={formValues.email}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="password"
                value={formValues.password}
              />
            )}
            {!showPassword && (
              <Button onClick={() => setShowPassword(true)}>
                Get Started
              </Button>
            )}
          </Form>
          {showPassword && <Button onClick={handleSignIn}>Log In</Button>}
        </Body>
      </AppContainer>
      <Footer>
        <FooterContent>
          <Copyright>
            <p>&copy; 2023 ACE Films</p>
          </Copyright>
          <Columns>
            <Column>
              <StyledLink to="/faq">FAQ</StyledLink>
              <StyledLink to="/account">Account</StyledLink>
            </Column>
            <Column>
              <StyledLink to="/contact">Contact Us</StyledLink>
              <StyledLink to="/help">Help</StyledLink>
            </Column>
            <Column>
              <StyledLink to="/legal">Legal Information</StyledLink>
              <StyledLink to="/cookies">Cookies</StyledLink>
            </Column>
          </Columns>
        </FooterContent>
      </Footer>
    </Container>
  );
}

export default Signup;
