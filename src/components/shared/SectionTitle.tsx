interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
    </div>
  );
} 