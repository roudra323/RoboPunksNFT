import React from "react";
import { Box, Button, Flex, Spacer, Image, Link } from "@chakra-ui/react";
import Facebook from "../assets/social-media-icons/facebook.png";
import Twitter from "../assets/social-media-icons/twitter.png";
import Email from "../assets/social-media-icons/email.png";

const NavBar = ({ accounts, setAccounts }) => {
  console.log(accounts[0]);
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <Flex justify="space-between" align="center" padding="30px">
      {/* Left side of the navbar - Social Media Icons */}
      <Flex justify="space-between" width="40%" padding="0 75px">
        <Link href="https://www.facebook.com/">
          <Image src={Facebook} boxSize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.twitter.com/">
          <Image src={Twitter} boxSize="42px" margin="0 15px" />
        </Link>
        <Link href="https://www.gmail.com/">
          <Image src={Email} boxSize="42px" margin="0 15px" />
        </Link>
      </Flex>

      {/* Right side of the navbar - Sections and Connect */}
      <Flex justify="space-between" width="40%" align="right" padding="30px">
        <Box margin="0 15px">About</Box>
        <Spacer />
        <Box margin="0 15px">Mint</Box>
        <Spacer />
        <Box margin="0 15px">Team</Box>
        <Spacer />
        {/* Connect button */}

        {isConnected ? (
          <Box margin="0 15px">Connected</Box>
        ) : (
          <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            marginTop="0 15px"
            onClick={connectAccount}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
