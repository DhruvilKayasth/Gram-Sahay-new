import { ArrowLeft, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showProfile?: boolean;
}

export function Header({ title, showBack = false, showProfile = false }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && !isHomePage && (
            <button 
              onClick={() => navigate(-1)}
              className="touch-target rounded-full hover:bg-primary-foreground/10"
              aria-label="પાછળ જાઓ"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          {title ? (
            <h1 className="text-xl font-bold">{title}</h1>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">ગ્રા</span>
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight">ગ્રામ સહાય</h1>
                <p className="text-xs opacity-90">Gram Sahay</p>
              </div>
            </div>
          )}
        </div>
        {showProfile && (
          <button 
            onClick={() => navigate("/dashboard")}
            className="touch-target rounded-full hover:bg-primary-foreground/10"
            aria-label="પ્રોફાઇલ"
          >
            <User className="w-6 h-6" />
          </button>
        )}
      </div>
    </header>
  );
}
