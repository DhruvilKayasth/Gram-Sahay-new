import { useState } from "react";
import { Trash2, Lightbulb, Droplets, Route, FileCheck, ChevronRight, X } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useToast } from "@/hooks/use-toast";

type Status = "pending" | "progress" | "resolved";

const categoryIcons: Record<string, React.ReactNode> = {
  garbage: <Trash2 className="w-5 h-5" />,
  streetlight: <Lightbulb className="w-5 h-5" />,
  water: <Droplets className="w-5 h-5" />,
  road: <Route className="w-5 h-5" />,
  documents: <FileCheck className="w-5 h-5" />,
};

const mockComplaints = [
  {
    id: "2024001",
    category: "કચરો",
    categoryKey: "garbage",
    description: "શેરી નંબર ૫ માં કચરો પડેલો છે",
    status: "pending" as Status,
    date: "૦૫ જાન્યુઆરી",
    citizen: "રામભાઈ પટેલ",
  },
  {
    id: "2024002",
    category: "સ્ટ્રીટ લાઇટ",
    categoryKey: "streetlight",
    description: "મંદિર પાસે સ્ટ્રીટ લાઇટ બંધ છે",
    status: "progress" as Status,
    date: "૦૩ જાન્યુઆરી",
    citizen: "સીતાબેન શાહ",
  },
  {
    id: "2024003",
    category: "પાણી",
    categoryKey: "water",
    description: "પાણીની પાઇપ લીક થઈ રહી છે",
    status: "resolved" as Status,
    date: "૦૧ જાન્યુઆરી",
    citizen: "મહેશભાઈ જોશી",
  },
];

const AdminComplaints = () => {
  const { toast } = useToast();
  const [complaints, setComplaints] = useState(mockComplaints);
  const [selectedComplaint, setSelectedComplaint] = useState<typeof mockComplaints[0] | null>(null);
  const [filterStatus, setFilterStatus] = useState<Status | "all">("all");

  const filteredComplaints = filterStatus === "all" 
    ? complaints 
    : complaints.filter(c => c.status === filterStatus);

  const updateStatus = (id: string, newStatus: Status) => {
    setComplaints(prev => 
      prev.map(c => c.id === id ? { ...c, status: newStatus } : c)
    );
    setSelectedComplaint(null);
    toast({
      title: "સ્થિતિ અપડેટ થઈ",
      description: `ફરિયાદ #${id} ની સ્થિતિ બદલાઈ`,
    });
  };

  return (
    <div className="page-container">
      <Header title="ફરિયાદ સંચાલન" showBack />

      <main className="content-container">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {[
            { key: "all", label: "બધા" },
            { key: "pending", label: "બાકી" },
            { key: "progress", label: "ચાલુ" },
            { key: "resolved", label: "પૂર્ણ" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setFilterStatus(filter.key as Status | "all")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filterStatus === filter.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Complaints List */}
        <div className="space-y-3">
          {filteredComplaints.map((complaint) => (
            <button
              key={complaint.id}
              onClick={() => setSelectedComplaint(complaint)}
              className="w-full card-elevated p-4 flex items-center gap-3 text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary shrink-0">
                {categoryIcons[complaint.categoryKey]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold truncate">{complaint.category}</span>
                  <StatusBadge status={complaint.status} showLabel={false} />
                </div>
                <p className="text-sm text-muted-foreground truncate">{complaint.description}</p>
                <p className="text-xs text-muted-foreground mt-1">#{complaint.id} • {complaint.citizen}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
            </button>
          ))}
        </div>

        {filteredComplaints.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>કોઈ ફરિયાદ નથી</p>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 z-50 bg-foreground/50 flex items-end justify-center">
          <div className="bg-card w-full max-w-lg rounded-t-2xl p-6 animate-in slide-in-from-bottom">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg">{selectedComplaint.category}</h3>
                <p className="text-sm text-muted-foreground">#{selectedComplaint.id}</p>
              </div>
              <button
                onClick={() => setSelectedComplaint(null)}
                className="p-2 rounded-full hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <span className="text-sm text-muted-foreground">નાગરિક:</span>
                <p className="font-medium">{selectedComplaint.citizen}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">વર્ણન:</span>
                <p>{selectedComplaint.description}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">હાલની સ્થિતિ:</span>
                <div className="mt-1">
                  <StatusBadge status={selectedComplaint.status} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground mb-2">સ્થિતિ બદલો:</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => updateStatus(selectedComplaint.id, "pending")}
                  className="p-3 rounded-xl status-pending border text-center font-medium"
                >
                  બાકી
                </button>
                <button
                  onClick={() => updateStatus(selectedComplaint.id, "progress")}
                  className="p-3 rounded-xl status-progress border text-center font-medium"
                >
                  ચાલુ
                </button>
                <button
                  onClick={() => updateStatus(selectedComplaint.id, "resolved")}
                  className="p-3 rounded-xl status-resolved border text-center font-medium"
                >
                  પૂર્ણ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminComplaints;
