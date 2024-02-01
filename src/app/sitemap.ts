import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/web` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/graphic` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/art-gallery` },
  ];
}
