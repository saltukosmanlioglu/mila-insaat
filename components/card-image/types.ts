export type CategoryType =
  | "All"
  | "3D Modeling"
  | "Architecture"
  | "Buildings"
  | "Landscape"
  | "Living Room";

export interface CardImageProps {
  category: CategoryType;
  href: string;
  image: string;
  title: string;
}
