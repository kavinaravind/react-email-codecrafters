import React from 'react';
import { Tailwind } from '@react-email/tailwind';
import { Body, Button, Container, Column, Head, Heading, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components';

type CodeCrafterskNewsletterProps = {
  url: string;
  title: string;
  subject: string;
  header: {
    source: string;
    alt: string;
  };
  userID: string;
  body: string;
  sections: {
    title: string;
    image: {
      source: string;
      alt: string;
    };
    Content: React.FC;
  }[];
  joinUs: {
    href: string;
    title: string;
  };
  regards: {
    title: string;
    email: string;
    footer: string;
  };
  media: {
    social: {
      main: {
        source: string;
        alt: string;
      };
      links: {
        href: string;
        SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>;
      }[];
    };
    links: {
      href: string;
      text: string;
    }[];
  };
  footer: {
    unsubscribe: string;
    copyright: string;
    location: string;
  };
};

const props: CodeCrafterskNewsletterProps = {
  url: 'https://codecrafters.io/',
  title: 'CodeCrafters - Newsletter',
  subject: 'Introducing Build your own Shell',
  header: {
    source: 'https://codecrafters.io//_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e38048e3.png&w=48&q=75',
    alt: 'CodeCrafters, Inc.',
  },
  userID: 'kavinaravind',
  body: 'Today, we have 3 major announcements to make.',
  sections: [
    {
      title: '1. New Challenge: Build your own Shell',
      image: {
        source: 'http://localhost:3000/static/challenge.jpg',
        alt: 'CodeCrafters, Inc.',
      },
      Content: () => (
        <>
          <Text className="mb-4 text-xl leading-7 text-black">
            We just launched <b>Build your own Shell</b>.
          </Text>
          <Text className="mb-4 text-base leading-7 text-black">
            Get your hands dirty with shell command parsing, process management and the inner workings of a POSIX-compliant shell.
          </Text>
          <Link href="https://app.codecrafters.io/courses/shell/overview">Check out the Challenge →</Link>
          <Text className="relative rounded-full px-3 py-1 text-center text-sm leading-7 text-black text-gray-600 ring-1 ring-gray-900/10">
            For readers of this newsletter, use&nbsp;
            <span className="inline-flex items-center rounded-md bg-pink-400/10 px-1 py-1 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20">
              MAY2024
            </span>
            &nbsp;to enjoy 50% off our 3 month and 1 year plan. Valid only for the first 50 upgrades, so get it fast.
          </Text>
        </>
      ),
    },
    {
      title: '2. New language Track: Gleam',
      image: {
        source: 'http://localhost:3000/static/language-track.jpg',
        alt: 'CodeCrafters, Inc.',
      },
      Content: () => (
        <>
          <Text className="mb-4 text-xl leading-7 text-black">
            The Gleam language is now supported on the Redis and SQLite challenges, with more coming soon.
          </Text>
          <Text className="mb-4 text-base leading-7 text-black">
            On the Redis challenge, you can watch screencasts by Louis Pilford, the creator of Gleam.
          </Text>
          <Link href="https://app.codecrafters.io/tracks/gleam">Try the Gleam Track →</Link>
        </>
      ),
    },
    {
      title: '3. Updates from the Community',
      image: {
        source: 'http://localhost:3000/static/community.jpg',
        alt: 'CodeCrafters, Inc.',
      },
      Content: () => (
        <>
          <Text className="text-xl leading-7 text-black">
            Miscellaneous news from the community:
            <ul className="list-inside list-disc">
              <li className="text-base leading-7 text-black">
                The Coding Sloth shared&nbsp;
                <Link href="https://www.youtube.com/watch?v=jTJvyKZDFsY&ab_channel=TheCodingSloth">20 cool project ideas</Link>
                &nbsp;for programmer
              </li>
              <li className="text-base leading-7 text-black">
                Isaac Harris-Holt released a video about&nbsp;
                <Link href="https://www.youtube.com/watch?v=jTJvyKZDFsY&ab_channel=TheCodingSloth">the simplicity of Gleam</Link>
              </li>
              <li className="text-base leading-7 text-black">
                Kodaps Academy talked about&nbsp;
                <Link href="https://www.youtube.com/watch?si=9Ecp7JTPANmoqoPm%3Fr%3D4vS&v=wKAsZImDtak&feature=youtu.be">why Zig pays more</Link>
              </li>
            </ul>
          </Text>
        </>
      ),
    },
  ],
  joinUs: {
    href: 'https://app.codecrafters.io/catalog',
    title: 'Join the best engineers in the world →',
  },
  regards: {
    title: 'Thank you for choosing Code Crafters!',
    email: 'hello@codecrafters.io',
    footer: '— Sarup & Paul.',
  },
  media: {
    social: {
      main: {
        source: 'https://codecrafters.io//_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e38048e3.png&w=48&q=75',
        alt: 'CodeCrafters, Inc.',
      },
      links: [
        {
          href: 'https://x.com/codecraftersio',
          SvgComponent: () => (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          ),
        },
        {
          href: 'https://github.com/codecrafters-io',
          SvgComponent: () => (
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-8 inline h-8 w-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
        {
          href: 'https://www.ycombinator.com/companies/codecrafters',
          SvgComponent: () => (
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-8 inline h-8 w-8 rounded text-gray-500" fill="currentColor" viewBox="0 0 512 512">
              <rect width="512" height="512" fill="currentColor" />
              <path d="M126 113h49l81 164 81-165h49L274 314v134h-42V314z" fill="#fff" />
            </svg>
          ),
        },
      ],
    },
    links: [
      { href: 'https://codecrafters.io/', text: 'Home' },
      { href: 'https://www.ycombinator.com/launches/Gh3-codecrafters-advanced-code-challenges-for-senior-engineers', text: 'About' },
      { href: 'https://codecrafters.io/perks', text: 'Perks' },
      { href: 'https://codecrafters.io/pricing', text: 'Pricing' },
      { href: 'https://codecrafters.io/expense', text: 'Expense' },
    ],
  },
  footer: {
    unsubscribe: 'https://ml-dkim.mail.codecrafters.io',
    copyright: 'Copyright (C) 2024 CodeCrafters. All rights reserved.',
    location: '2041 East St, Concord, CA 94520.',
  },
};

export const CodeCrafterskNewsletter: React.FC<CodeCrafterskNewsletterProps> = (props): JSX.Element => {
  const { url, title, subject, header, userID, body, joinUs, regards, media, footer } = props;

  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#0f172a',
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Preview>{subject}</Preview>
        <Body className="mx-auto bg-gray-50 font-sans">
          <Container className="mx-auto max-w-xl">
            <Section className="mt-8">
              <Link href={url}>
                <Img src={header.source} width="48" height="48" alt={header.alt} />
              </Link>
            </Section>
            <Section className="mt-4">
              <Heading className="text-3xl font-bold text-gray-900">{title}</Heading>
              <Text className="text-lg leading-7 text-black">Hey {userID}!</Text>
              <Text className="text-base leading-7 text-black">{body}</Text>
            </Section>
            {props.sections.map((section, index) => (
              <Section key={index} className="mt-4 rounded-lg bg-gray-200 p-4">
                <Heading className="text-3xl font-bold text-gray-900">{section.title}</Heading>
                <Img src={section.image.source} width="600" height="315" alt={section.image.alt} />
                <section.Content />
              </Section>
            ))}
            <Section className="mt-4">
              <Button href={joinUs.href} className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
                {joinUs.title}
              </Button>
            </Section>
            <Section className="mt-4">
              <Text className="mb-3 text-xl leading-7 text-black">{regards.title}</Text>
              <Text className="text-sm leading-6 text-black">
                If you have any questions or need assistance, feel free to&nbsp;
                <a href={`mailto:${regards.email}`} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  reach out
                </a>
                .
                <br />
              </Text>
              <Text className="text-center text-sm leading-6 text-black">
                Yours sincerely,
                <br />
                {regards.footer}
              </Text>
            </Section>
            <Section>
              <Row className="mb-8 w-full pl-2 pr-2">
                <Column className="w-4/6">
                  <Link href={url}>
                    <Img src={media.social.main.source} width="48" height="48" alt={media.social.main.alt} />
                  </Link>
                </Column>
                <Column>
                  <Row>
                    {media.social.links.map((link, index) => (
                      <Column key={index}>
                        <Link href={link.href}>
                          <link.SvgComponent />
                        </Link>
                      </Column>
                    ))}
                  </Row>
                </Column>
              </Row>
            </Section>
            <Section>
              {media.links.map((link, index) => (
                <React.Fragment key={index}>
                  <Link className="text-gray-500 underline" href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </Link>
                  {index < media.links.length - 1 && <>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</>}
                </React.Fragment>
              ))}
              <Text className="text-left text-xs leading-4 text-gray-500">
                {footer.copyright}
                <br />
                <br />
                {footer.location}
              </Text>
              <Button className="mb-12 text-left text-xs leading-4 text-gray-400" href={footer.unsubscribe}>
                <span className="underline">Unsubscribe</span>
              </Button>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

CodeCrafterskNewsletter.defaultProps = props;

export default CodeCrafterskNewsletter;
