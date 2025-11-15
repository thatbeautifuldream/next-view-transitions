import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryImages } from "../data";
import { ViewTransition } from "react";

export default async function ImageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const image = galleryImages.find((img) => img.id === id);

  console.log("Rendering image detail for ID:", id, image);

  if (!image) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Gallery
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
            <ViewTransition name={`image-${image.id}`}>
              <div className="aspect-4/3 w-full">
                <Image
                  src={image.url}
                  alt={image.title}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </ViewTransition>
          </div>

          <div className="flex flex-col justify-center">
            <ViewTransition name={`title-${image.id}`}>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                {image.title}
              </h1>
            </ViewTransition>
            <ViewTransition name={`photographer-${image.id}`}>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Photography by {image.photographer}
              </p>
            </ViewTransition>
            <p className="mt-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {image.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Dimensions
                </span>
                <span className="text-sm text-zinc-900 dark:text-zinc-50">
                  {image.width} × {image.height}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
