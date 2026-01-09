import { Trash2, Lightbulb, Droplets, Route, FileCheck } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";
import { ComplaintCard } from "@/components/ComplaintCard";

const categoryIcons: Record<string, React.ReactNode> = {
  garbage: <Trash2 className="w-6 h-6" />,
  streetlight: <Lightbulb className="w-6 h-6" />,
  water: <Droplets className="w-6 h-6" />,
  road: <Route className="w-6 h-6" />,
  documents: <FileCheck className="w-6 h-6" />,
};

const mockComplaints = [
  {
    id: "2024001",
    category: "કચરો",
    categoryKey: "garbage",
    description: "શેરી નંબર ૫ માં કચરો પડેલો છે, કૃપા કરીને સાફ કરો",
    status: "pending" as const,
    date: "૦૫ જાન્યુઆરી",
  },
  {
    id: "2024002",
    category: "સ્ટ્રીટ લાઇટ",
    categoryKey: "streetlight",
    description: "મંદિર પાસે સ્ટ્રીટ લાઇટ બંધ છે",
    status: "progress" as const,
    date: "૦૩ જાન્યુઆરી",
  },
  {
    id: "2024003",
    category: "પાણી",
    categoryKey: "water",
    description: "પાણીની પાઇપ લીક થઈ રહી છે",
    status: "resolved" as const,
    date: "૦૧ જાન્યુઆરી",
  },
];

const Dashboard = () => {
  const pendingCount = mockComplaints.filter(c => c.status === "pending").length;
  const progressCount = mockComplaints.filter(c => c.status === "progress").length;
  const resolvedCount = mockComplaints.filter(c => c.status === "resolved").length;

  return (
    <div className="page-container">
      <Header title="મારી ફરિયાદો" showBack />

      <main className="content-container">
        {/* Status Summary */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="card-elevated p-3 text-center status-pending border-l-4">
            <div className="text-2xl font-bold">{pendingCount}</div>
            <div className="text-xs">બાકી</div>
          </div>
          <div className="card-elevated p-3 text-center status-progress border-l-4">
            <div className="text-2xl font-bold">{progressCount}</div>
            <div className="text-xs">ચાલુ</div>
          </div>
          <div className="card-elevated p-3 text-center status-resolved border-l-4">
            <div className="text-2xl font-bold">{resolvedCount}</div>
            <div className="text-xs">પૂર્ણ</div>
          </div>
        </div>

        {/* Complaints List */}
        <h2 className="section-title">તાજેતરની ફરિયાદો</h2>
        <div className="space-y-3">
          {mockComplaints.map((complaint) => (
            <ComplaintCard
              key={complaint.id}
              id={complaint.id}
              category={complaint.category}
              categoryIcon={categoryIcons[complaint.categoryKey]}
              description={complaint.description}
              status={complaint.status}
              date={complaint.date}
            />
          ))}
        </div>

        {mockComplaints.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>કોઈ ફરિયાદ નથી</p>
            <p className="text-sm">No complaints yet</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
