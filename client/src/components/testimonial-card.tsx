import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
  imageSrc?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, company, text, rating } = testimonial;

  return (
    <Card className="bg-white p-6 rounded-lg shadow-md border border-neutral-light">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <span 
                key={i} 
                className="material-icons"
              >
                {i < Math.floor(rating) ? "star" : i < rating ? "star_half" : "star_border"}
              </span>
            ))}
          </div>
        </div>
        <p className="text-neutral-dark mb-4">"{text}"</p>
        <div className="flex items-center">
          <div className="mr-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <span className="material-icons">person</span>
            </div>
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-neutral-medium">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
