import Link from "next/link";
import { introduction, volumes } from "../lib/data";
import Image from "next/image";

export default function HomePage() {
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
    </div>
  );
}
