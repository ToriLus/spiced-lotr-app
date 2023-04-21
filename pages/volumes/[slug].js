import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";

export default function VolumeDetails() {
  /* slug: "the-fellowship-of-the-ring",
    title: "The Fellowship of the Ring",
    description:
      "The Fellowship of the Ring is the first volume of J. R. R. Tolkien's epic adventure The Lord of the Rings. It is followed by The Two Towers and The Return of the King.",
    cover: "/images/the-fellowship-of-the-ring.png",
    books: [
      {
        ordinal: "Book I",
        title: "The Ring Sets Out",
      },
      {
        ordinal: "Book II",
        title: "The Ring Goes South",
      }, */

  const bouter = useRouter();
  const { slug } = bouter.query;
  let number = getRandomElement(volumes);

  let volume = volumes.find((book) => book.slug.toLowerCase() === slug);

  function getRandomElement(array) {
    return [Math.floor(Math.random() * array.length)];
  }

  console.log(volume);

  return (
    <div>
      <h1>{volume.title}</h1>
      <Image
        src={`/../public${volume.cover}`}
        height={500}
        width={300}
        alt="Cover image of the volume"
      />
      <p>{volume.description}</p>
      <div>
        <h4>{volume.books[0].ordinal}</h4>
        <p>{volume.books[0].title}</p>
      </div>

      <div>
        <h4>{volume.books[1].ordinal}</h4>
        <p>{volume.books[1].title}</p>
      </div>

      <h2>other books</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => Router.push(`/volumes/`)}>index!</button>
      <button onClick={() => Router.push(`/volumes/${volumes[number].slug}`)}>
        Random book!
      </button>
    </div>
  );
}
