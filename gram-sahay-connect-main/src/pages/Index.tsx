import { FileText, Bell, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Header showProfile />
      
      <main className="content-container">
        {/* Hero Section */}
        <div className="text-center py-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground text-4xl font-bold">ગ્રા</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">ગ્રામ સહાય</h2>
          <p className="text-muted-foreground mb-1">Gram Sahay</p>
          <p className="text-sm text-muted-foreground">તમારા ગામની સેવા માટે</p>
          <p className="text-xs text-muted-foreground">At your village's service</p>
        </div>

        {/* Main Action Buttons */}
        <div className="space-y-4 mb-8">
          <button
            onClick={() => navigate("/file-complaint")}
            className="w-full btn-primary-large flex items-center justify-center gap-3"
          >
            <FileText className="w-6 h-6" />
            <div className="text-left">
              <div>ફરિયાદ નોંધાવો</div>
              <div className="text-sm opacity-90 font-normal">File Complaint</div>
            </div>
          </button>

          <button
            onClick={() => navigate("/notices")}
            className="w-full btn-outline-large flex items-center justify-center gap-3"
          >
            <Bell className="w-6 h-6" />
            <div className="text-left">
              <div>સૂચનાઓ જુઓ</div>
              <div className="text-sm opacity-70 font-normal">View Notices</div>
            </div>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="card-elevated p-4">
          <h3 className="section-title flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            ગામ સેવા આંકડા
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-lg bg-accent">
              <div className="text-2xl font-bold text-primary">156</div>
              <div className="text-xs text-muted-foreground">કુલ ફરિયાદ</div>
            </div>
            <div className="p-3 rounded-lg bg-status-resolved-bg">
              <div className="text-2xl font-bold text-status-resolved">142</div>
              <div className="text-xs text-muted-foreground">ઉકેલ</div>
            </div>
            <div className="p-3 rounded-lg bg-status-pending-bg">
              <div className="text-2xl font-bold text-status-pending">14</div>
              <div className="text-xs text-muted-foreground">બાકી</div>
            </div>
          </div>
        </div>

        {/* Admin Link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/admin/login")}
            className="text-sm text-muted-foreground underline"
          >
            Admin Login
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
