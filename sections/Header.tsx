
import { ImageWidget } from 'apps/admin/widgets.ts';

interface BannerProps {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  image?: ImageWidget;
}

export default function Banner({
  title = "Discover Our Offer",
  description = "Check out our amazing products and services. Don't miss this opportunity!",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/b0f8ca2d-9c83-48f7-88de-1a6e6d1e9eb7"
}: BannerProps) {
  return (
    <div class="bg-yellow-100 text-yellow-900 py-12 px-6 rounded-xl font-display flex items-center animate-slide-left">
      <img
        src={image}
        alt="Banner"
        class="w-32 h-24 object-cover object-center rounded-xl shadow-lg mr-6"
      />
      <div>
        <h2 class="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        <p class="text-md md:text-lg">{description}</p>
      </div>
    </div>
  );
}
