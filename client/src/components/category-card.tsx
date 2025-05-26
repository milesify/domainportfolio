import { Link } from "wouter";
import { Category } from "@shared/schema";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { id, name, icon, count } = category;

  return (
    <Link href={`/domains?categoryId=${id}`}>
      <div className="category-card cursor-pointer">
        <span className="material-icons text-primary text-3xl">{icon}</span>
        <h3 className="mt-2 font-medium">{name}</h3>
        <p className="text-sm text-neutral-medium">{count} domains</p>
      </div>
    </Link>
  );
}
