
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        "after:absolute after:inset-0 after:bg-gradient-to-b after:from-background/0 after:to-background after:z-10"
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 z-20 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-coach-purple to-coach-blue bg-clip-text text-transparent">
              Transform Your Future
            </span>
            <br />
            With Expert Coaching
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up">
            Unlock your full potential with personalized coaching and cutting-edge teaching methodologies. Join thousands of successful students who've achieved their academic goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Button className="bg-gradient-to-r from-coach-purple to-coach-blue hover:opacity-90 text-white px-8 py-6 rounded-lg text-lg">
              Explore Courses
            </Button>
            <Button variant="outline" className="px-8 py-6 rounded-lg text-lg">
              Free Consultation
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Expert Coaches" },
              { number: "25,000+", label: "Students Taught" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-coach-purple to-coach-blue bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
