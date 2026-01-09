import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Eye, EyeOff } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login
    if (username && password) {
      toast({
        title: "સફળ લૉગિન",
        description: "Admin dashboard માં આપનું સ્વાગત છે",
      });
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "ભૂલ",
        description: "કૃપા કરીને બધી વિગતો ભરો",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="page-container">
      <Header showBack />

      <main className="content-container">
        <div className="py-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Admin Login</h2>
          <p className="text-muted-foreground">એડમિન લૉગિન</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Username / યુઝરનેમ
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full p-4 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password / પાસવર્ડ
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full p-4 pr-12 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full btn-primary-large mt-6">
            Login / લૉગિન
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground underline"
          >
            ← નાગરિક પોર્ટલ પર પાછા જાઓ
          </button>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;
