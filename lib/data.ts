export type TGalleryImage = {
  id: string;
  title: string;
  description: string;
  photographer: string;
  url: string;
  width: number;
  height: number;
};

export const galleryImages: TGalleryImage[] = [
  {
    id: "1",
    title: "Mountain Peak at Sunset",
    description:
      "A breathtaking view of snow-capped mountains during golden hour, with dramatic clouds painting the sky in shades of orange and pink.",
    photographer: "John Anderson",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    width: 800,
    height: 600,
  },
  {
    id: "2",
    title: "Ocean Waves",
    description:
      "Crystal clear turquoise waters meeting pristine sandy shores, with gentle waves creating mesmerizing patterns.",
    photographer: "Sarah Chen",
    url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    width: 800,
    height: 600,
  },
  {
    id: "3",
    title: "Forest Path",
    description:
      "A serene woodland trail winding through ancient trees, dappled sunlight filtering through the canopy above.",
    photographer: "Michael Torres",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    width: 800,
    height: 600,
  },
  {
    id: "4",
    title: "City Lights",
    description:
      "Urban skyline illuminated at dusk, with countless windows glowing against the deepening twilight sky.",
    photographer: "Emma Williams",
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    width: 800,
    height: 600,
  },
  {
    id: "5",
    title: "Desert Dunes",
    description:
      "Endless golden sand dunes creating dramatic shadows and curves under the intense desert sun.",
    photographer: "David Park",
    url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    width: 800,
    height: 600,
  },
  {
    id: "6",
    title: "Aurora Borealis",
    description:
      "The northern lights dancing across the Arctic sky in brilliant greens and purples, reflecting on still waters below.",
    photographer: "Lisa Nordström",
    url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    width: 800,
    height: 600,
  },
];
