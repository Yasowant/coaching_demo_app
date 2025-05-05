
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    id: 1,
    title: "Math Excellence Program",
    description: "Master mathematics from algebra to calculus with our comprehensive program designed for all skill levels.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=350&fit=crop",
    category: "Mathematics",
    duration: "12 Weeks",
    level: "All Levels",
    rating: 4.9,
    popular: true,
  },
  {
    id: 2,
    title: "Science Discovery",
    description: "Explore physics, chemistry, and biology through hands-on experiments and expert guidance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop",
    category: "Science",
    duration: "10 Weeks",
    level: "Beginner to Intermediate",
    rating: 4.8,
  },
  {
    id: 3,
    title: "SAT/ACT Test Preparation",
    description: "Comprehensive preparation for standardized tests with proven strategies and practice materials.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=350&fit=crop",
    category: "Test Prep",
    duration: "8 Weeks",
    level: "High School",
    rating: 4.95,
    popular: true,
  },
  {
    id: 4,
    title: "English Language & Literature",
    description: "Develop strong communication skills and literary analysis through our engaging language program.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=350&fit=crop",
    category: "Language Arts",
    duration: "16 Weeks",
    level: "All Levels",
    rating: 4.7,
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-20 section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Courses</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-coach-purple to-coach-blue mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of coaching programs designed to help you excel in your academic journey.
            Each course is crafted by experts with years of teaching experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover-effect border border-border">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-accent/80 backdrop-blur-sm">
                    {course.category}
                  </Badge>
                </div>
                {course.popular && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription className="flex justify-between">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">{course.description}</p>
                
                <div className="mt-4 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs ml-2 text-muted-foreground">{course.rating} (120+ reviews)</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-coach-purple to-coach-blue hover:opacity-90">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
