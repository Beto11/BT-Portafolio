import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  const RacoonImg = `/logo/racoon${useColorModeValue("", "-dark")}.png`;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={RacoonImg}
            width={40}
            height={40}
            alt="racoon logo"
          ></Image>
          <Text color={useColorModeValue("gray.800", "whiteAlpha.900")} ml={3}>
            Beto
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
