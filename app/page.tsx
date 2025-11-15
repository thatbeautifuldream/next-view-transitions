import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { galleryImages } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore a curated collection of stunning photography from around the
            world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <Link
              key={image.id}
              href={`/${image.id}`}
              className="group relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
            >
              <ViewTransition name={`image-${image.id}`}>
                <div className="aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.title}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover"
                  />
                </div>
              </ViewTransition>
              <div className="p-4">
                <ViewTransition name={`title-${image.id}`}>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {image.title}
                  </h2>
                </ViewTransition>
                <ViewTransition name={`photographer-${image.id}`}>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    by {image.photographer}
                  </p>
                </ViewTransition>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
