interface LoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function microCMSImageLoader({ src, width, quality }: LoaderProps) {
  if (!src.startsWith('https://images.microcms-assets.io')) {
    return src;
  }

  try {
    const url = new URL(src);

    url.searchParams.set('w', width.toString());

    if (quality) {
      url.searchParams.set('q', quality.toString());
    }

    url.searchParams.set('fm', 'webp');

    return url.href;
  } catch (error) {
    console.warn(error)
    return src;
  }
}