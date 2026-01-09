import { LucideIcon } from "lucide-react";

interface CategoryButtonProps {
  icon: LucideIcon;
  label: string;
  labelEn?: string;
  selected?: boolean;
  onClick: () => void;
}

export function CategoryButton({ icon: Icon, label, labelEn, selected, onClick }: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`icon-button ${selected ? "icon-button-selected" : ""}`}
    >
      <Icon className={`w-8 h-8 ${selected ? "text-primary" : "text-muted-foreground"}`} />
      <span className={`text-sm font-medium text-center ${selected ? "text-primary" : "text-foreground"}`}>
        {label}
      </span>
      {labelEn && (
        <span className="text-xs text-muted-foreground">{labelEn}</span>
      )}
    </button>
  );
}
