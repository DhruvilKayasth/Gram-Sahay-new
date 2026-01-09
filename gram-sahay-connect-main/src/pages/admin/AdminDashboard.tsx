import { FileText, Clock, CheckCircle2, AlertCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/Header";

const stats = [
  { label: "કુલ ફરિયાદ", labelEn: "Total", value: 156, icon: FileText, color: "bg-primary/10 text-primary" },
  { label: "બાકી", labelEn: "Pending", value: 14, icon: Clock, color: "bg-status-pending-bg text-status-pending" },
  { label: "ચાલુ", labelEn: "In Progress", value: 12, icon: AlertCircle, color: "bg-status-progress-bg text-status-progress" },
  { label: "પૂર્ણ", labelEn: "Resolved", value: 130, icon: CheckCircle2, color: "bg-status-resolved-bg text-status-resolved" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Header title="Admin Panel" />

      <main className="content-container">
        {/* Welcome */}
        <div className="card-elevated p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg">સ્વાગત છે, Admin</h2>
              <p className="text-sm text-muted-foreground">ગ્રામ પંચાયત કચેરી</p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="p-3 rounded-full hover:bg-muted transition-colors"
              aria-label="Logout"
            >
              <LogOut className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <h3 className="section-title">ફરિયાદ આંકડા</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="card-elevated p-4">
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.labelEn}</div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <h3 className="section-title">ઝડપી ક્રિયાઓ</h3>
        <div className="space-y-3">
          <button
            onClick={() => navigate("/admin/complaints")}
            className="w-full card-elevated p-4 flex items-center gap-4 text-left hover:border-primary transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-semibold">ફરિયાદ સંચાલન</h4>
              <p className="text-sm text-muted-foreground">Manage Complaints</p>
            </div>
          </button>

          <button
            onClick={() => navigate("/admin/complaints?filter=pending")}
            className="w-full card-elevated p-4 flex items-center gap-4 text-left hover:border-primary transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-status-pending-bg flex items-center justify-center">
              <Clock className="w-6 h-6 text-status-pending" />
            </div>
            <div>
              <h4 className="font-semibold">બાકી ફરિયાદો</h4>
              <p className="text-sm text-muted-foreground">View Pending ({stats[1].value})</p>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
