import React from 'react';
import parksData from '../data/parks.json';

interface ImageCredit {
  author: string;
  license: string;
  source?: string;
}

interface ParkImage {
  src: string;
  credit: ImageCredit;
  priority: string;
}

interface Park {
  parkId: string;
  title: string;
  images: ParkImage[];
}

interface ParkGalleryProps {
  parkId: string;
}

const ParkGallery: React.FC<ParkGalleryProps> = ({ parkId }) => {
  // Find the park data
  const park = (parksData as Park[]).find((p) => p.parkId === parkId);

  if (!park) {
    return <div className="text-gray-500">Park not found</div>;
  }

  // Only get gallery images - ignore hero images
  const galleryImages = park.images.filter((img) => img.priority === 'gallery');

  if (galleryImages.length === 0) {
    return <div className="text-gray-500">No gallery images available for this park</div>;
  }

  return (
    <div className="w-full my-8">
      {/* Gallery Grid - Numbering starts at 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {galleryImages.map((image, index) => {
          const photoNumber = index + 1; // Start numbering at 1
          return (
            <div key={index} className="relative w-full">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={image.src}
                  alt={`${park.title} - Photo ${photoNumber}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Sequential Badge */}
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                  {photoNumber}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Credits Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Image Credits
        </h3>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-500">
          {galleryImages.map((image, index) => {
            const photoNumber = index + 1;
            const creditText = `[${photoNumber}] Photo by ${image.credit.author} • ${image.credit.license}`;
            
            return (
              <li key={index} className="leading-relaxed">
                {image.credit.source ? (
                  <a
                    href={image.credit.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 underline"
                  >
                    {creditText}
                  </a>
                ) : (
                  creditText
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ParkGallery;
