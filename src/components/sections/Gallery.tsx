
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "classroom",
    title: "Modern Learning Environment"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "students",
    title: "One-on-One Coaching"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "events",
    title: "Educational Workshop"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "classroom",
    title: "Group Study Session"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "students",
    title: "Digital Learning Resources"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "events",
    title: "Graduation Ceremony"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "classroom",
    title: "Remote Learning Session"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "students",
    title: "Student Achievement Awards"
  }
];

export function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-coach-purple to-coach-blue mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our learning environments, student activities, and special events.
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-2">
          {['all', 'classroom', 'students', 'events'].map((category) => (
            <Button 
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={cn(
                "capitalize",
                filter === category && "bg-gradient-to-r from-coach-purple to-coach-blue"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover-effect h-64"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-medium">{image.title}</h4>
                  <p className="text-sm text-gray-300 capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
