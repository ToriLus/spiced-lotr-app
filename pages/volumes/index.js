import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Image from "next/image";
import { useRouter } from "next/router";
import VolumeDetails from "../volumes/[slug]";
import Router from "next/router";

export default function HomePage() {
  const router = useRouter();
  const { slug } = router.query;

  function getRandomElement(array) {
    return [Math.floor(Math.random() * array.length)];
  }

  let number = getRandomElement(volumes);

  return (
    <div>
      <h1>Lord of the Rings is a good series!</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      {/* we wanna do this dynamically */}
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Image
              src={`/../public${volume.cover}`}
              height={150}
              width={144}
              alt="Cover image of the volume"
            />
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => Router.push(`/volumes/${volumes[number].slug}`)}>
        Random book!
      </button>
    </div>
  );
}
