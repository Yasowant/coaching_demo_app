
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-coach-purple to-coach-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              We're Dedicated to Your
              <span className="bg-gradient-to-r from-coach-purple to-coach-blue bg-clip-text text-transparent ml-2">
                Academic Success
              </span>
            </h3>
            
            <p className="text-muted-foreground">
              Founded in 2010, EduCoach has helped thousands of students achieve their academic and professional goals through our innovative coaching approach. Our mission is to provide personalized education that unlocks each student's unique potential.
            </p>
            
            <p className="text-muted-foreground">
              What makes us different is our commitment to individualized learning experiences. Our expert coaches work closely with students to identify their strengths and areas for growth, creating customized learning plans that deliver results.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Personalized Approach",
                "Certified Instructors",
                "Flexible Scheduling",
                "Proven Results"
              ].map((feature, i) => (
                <div key={i} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button className="bg-gradient-to-r from-coach-purple to-coach-blue hover:opacity-90">
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg hover-effect relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Students studying"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover-effect relative h-40">
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                    alt="Class discussion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-lg overflow-hidden shadow-lg hover-effect relative h-40">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="One-on-one coaching"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover-effect relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    alt="Group learning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-coach-purple/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-coach-blue/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
