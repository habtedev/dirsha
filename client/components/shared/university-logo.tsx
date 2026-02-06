// components/shared/university-logo.tsx
export function UniversityLogo({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizes = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16"
  };

  return (
    <div className={`relative ${sizes[size]}`}>
      <img
        src="https://res.cloudinary.com/di3ll9dgt/image/upload/v1770387114/new_ghw5vi.jpg"
        alt="University of Gondar Logo"
        className="h-full w-full rounded-full object-cover border-2 border-white shadow-md"
      />
      <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
    </div>
  );
}