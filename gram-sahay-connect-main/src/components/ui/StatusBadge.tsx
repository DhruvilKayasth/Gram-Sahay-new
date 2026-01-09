import { Clock, Loader2, CheckCircle2 } from "lucide-react";

type Status = "pending" | "progress" | "resolved";

interface StatusBadgeProps {
  status: Status;
  showLabel?: boolean;
}

const statusConfig = {
  pending: {
    icon: Clock,
    label: "બાકી",
    labelEn: "Pending",
    className: "status-pending",
  },
  progress: {
    icon: Loader2,
    label: "ચાલુ",
    labelEn: "In Progress",
    className: "status-progress",
  },
  resolved: {
    icon: CheckCircle2,
    label: "પૂર્ણ",
    labelEn: "Resolved",
    className: "status-resolved",
  },
};

export function StatusBadge({ status, showLabel = true }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${config.className}`}>
      <Icon className="w-4 h-4" />
      {showLabel && <span>{config.label}</span>}
    </span>
  );
}
