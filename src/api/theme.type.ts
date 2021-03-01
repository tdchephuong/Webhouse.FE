interface TThemeLandscapePreviewImage {
  name: null;
  url: string;
  width: number;
  height: number;
}

interface TThemePreview {
  icon_with_landscape_preview: {
    icon_url: string;
    landscape_url: string;
  };
  live_site: {
    url: string;
  };
  landscape_preview: {
    landscape_url: string;
    image_urls: Array<TThemeLandscapePreviewImage>;
  };
}

interface TTheme {
  id: string;
  name: string;
  description?: string;
  site?: string;
  classification: string;
  price_cents: number;
  number_of_sales: number;
  author_username: string;
  author_url: string;
  url: string;
  summary?: string;
  rating: {
    rating: number;
    count: number;
  };
  updated_at: string;
  trending: false;
  previews: TThemePreview;
  attributes?: Array<{
    name: string;
    value: string|Array<string>|null;
  }>;
  key_features?: Array<string>;
  image_urls?: Array<string>;
  tags?: Array<string>;
  discounts?: Array<number>;
}

export default TTheme