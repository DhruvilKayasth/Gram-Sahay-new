import { Home, FileText, Bell, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "હોમ", labelEn: "Home", path: "/" },
  { icon: FileText, label: "ફરિયાદ", labelEn: "Complaints", path: "/dashboard" },
  { icon: Bell, label: "સૂચનાઓ", labelEn: "Notices", path: "/notices" },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t shadow-lg">
      <div className="max-w-lg mx-auto flex justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center py-3 px-6 min-w-[80px] transition-colors ${
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={item.label}
            >
              <item.icon className={`w-6 h-6 ${isActive ? "stroke-[2.5]" : ""}`} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
