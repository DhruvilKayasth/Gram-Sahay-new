import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StatusBadge } from "./ui/StatusBadge";

interface ComplaintCardProps {
  id: string;
  category: string;
  categoryIcon: React.ReactNode;
  description: string;
  status: "pending" | "progress" | "resolved";
  date: string;
}

export function ComplaintCard({ id, category, categoryIcon, description, status, date }: ComplaintCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/complaint/${id}`)}
      className="w-full card-elevated p-4 flex items-start gap-4 text-left"
    >
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0">
        {categoryIcon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-foreground truncate">{category}</h3>
          <StatusBadge status={status} showLabel={false} />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">#{id} • {date}</span>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 self-center" />
    </button>
  );
}
