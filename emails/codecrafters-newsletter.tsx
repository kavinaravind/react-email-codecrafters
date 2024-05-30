import React from "react";
import { Tailwind } from "@react-email/tailwind";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

type CodeCrafterskNewsletterProps = {
  userID: string;
};

export const CodeCrafterskNewsletter: React.FC<CodeCrafterskNewsletterProps> = ({ userID = "kavinaravind" }): JSX.Element => {
  const URL = "https://codecrafters.io/";

  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#0f172a",
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Preview>Introducing Build your own Shell</Preview>
        <Body className="mx-auto bg-white font-sans">
          <Container className="mx-auto max-w-xl">
            <Section className="mt-8">
              <Link href={URL}>
                <Img
                  src={`${URL}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e38048e3.png&w=48&q=75`}
                  width="48"
                  height="48"
                  alt="CodeCrafters, Inc."
                />
              </Link>
            </Section>
            <Text className="mb-4 text-xl leading-7 text-black">
              Hey {userID}!
            </Text>
            <Text className="mb-4 text-xl leading-7 text-black">
              Today, we have 3 major announcements to make.
            </Text>
            <Heading className="mx-0 my-[30px] p-0 text-3xl font-bold text-gray-900">
              New Challenge: Build your own Shell
            </Heading>
            <Text className="mb-4 text-xl leading-7 text-black">
              We just launched Build your own Shell.
            </Text>
            <Text className="mb-4 text-xl leading-7 text-black">
              Get your hands dirty with shell command parsing, process management and the inner workings of a POSIX-compliant shell.
            </Text>
            <Section className="mb-4 mr-12 rounded bg-gray-200 px-[43px] py-[23px]">
              <Text className="text-center align-middle text-3xl">
                {userID}
              </Text>
            </Section>
            <Text className="mb-3 text-xl leading-7 text-black">
              Thank you for choosing Code Crafters!
            </Text>
            <Text className="text-sm leading-6 text-black">
              If you have any questions or need assistance, feel free to&nbsp;
              <a
                href="mailto:hello@codecrafters.io"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                reach out
              </a>.
              <br />
             
            </Text>
            <Text className="text-sm leading-6 text-black text-center">
            Yours sincerely,
              <br />
              — Sarup & Paul.
            </Text>
            <Section>
              <Row className="mb-8 w-full pl-2 pr-2">
                <Column className="w-4/6">
                  <Link href={URL}>
                    <Img
                      src={`${URL}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e38048e3.png&w=48&q=75`}
                      width="48"
                      height="48"
                      alt="CodeCrafters, Inc."
                    />
                  </Link>
                </Column>
                <Column>
                  <Row>
                    <Column>
                      <Link href={"https://x.com/codecraftersio"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-8 inline w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                        </svg>
                      </Link>
                    </Column>
                    <Column>
                      <Link href={"https://github.com/codecrafters-io"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-8 inline w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </Column>
                    <Column>
                      <Link href={"https://www.ycombinator.com/companies/codecrafters"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-8 inline w-8 h-8 text-gray-500 rounded" fill="currentColor" viewBox="0 0 512 512">
                            <rect width="512" height="512" fill="currentColor" />
                            <path d="M126 113h49l81 164 81-165h49L274 314v134h-42V314z" fill="#fff"/>
                        </svg>
                      </Link>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>
            <Section>
              <Link
                className="text-gray-500 underline"
                href={URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                className="text-gray-500 underline"
                href={"https://www.ycombinator.com/launches/Gh3-codecrafters-advanced-code-challenges-for-senior-engineers"}
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                className="text-gray-500 underline"
                href={`${URL}/perks`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Perks
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                className="text-gray-500 underline"
                href={`${URL}/pricing`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pricing
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                className="text-gray-500 underline"
                href={`${URL}/expense`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Expense
              </Link>
              <Text className="text-left text-xs leading-4 text-gray-500">
                Copyright (C) 2024 CodeCrafters. All rights reserved.
                <br />
                <br />
                2041 East St, Concord, CA 94520.
              </Text>
              <Button className="mb-12 text-left text-xs leading-4 text-gray-400" href="https://ml-dkim.mail.codecrafters.io">
                <span className="underline">Unsubscribe</span>
              </Button>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default CodeCrafterskNewsletter;





