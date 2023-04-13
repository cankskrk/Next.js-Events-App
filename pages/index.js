import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ data }) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About</a>
        </nav>
      </header>
      <main>
        {data.map((ev) => (
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image alt={ev.title} src={ev.image} width={200} height={350} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        ))}
      </main>
      <footer>© 2023 - cankskrk - Events App</footer>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
