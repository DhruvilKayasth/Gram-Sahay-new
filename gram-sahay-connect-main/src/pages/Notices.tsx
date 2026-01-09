import { Bell, Calendar, AlertTriangle, Info, Megaphone } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";

const mockNotices = [
  {
    id: 1,
    type: "urgent",
    title: "પાણી કાપ",
    titleEn: "Water Supply Cut",
    description: "આવતીકાલે સવારે ૮ થી ૧૨ વાગ્યા સુધી પાણી બંધ રહેશે.",
    date: "૦૮ જાન્યુઆરી ૨૦૨૪",
    icon: AlertTriangle,
  },
  {
    id: 2,
    type: "announcement",
    title: "ગ્રામ સભા",
    titleEn: "Village Meeting",
    description: "આગામી રવિવારે સાંજે ૪ વાગ્યે પંચાયત ભવન ખાતે ગ્રામ સભાનું આયોજન.",
    date: "૦૭ જાન્યુઆરી ૨૦૨૪",
    icon: Megaphone,
  },
  {
    id: 3,
    type: "info",
    title: "રસીકરણ અભિયાન",
    titleEn: "Vaccination Drive",
    description: "આરોગ્ય કેન્દ્ર ખાતે ૧૦ થી ૧૫ જાન્યુઆરી દરમિયાન મફત રસીકરણ.",
    date: "૦૫ જાન્યુઆરી ૨૦૨૪",
    icon: Info,
  },
];

const typeStyles = {
  urgent: "border-l-destructive bg-destructive/5",
  announcement: "border-l-primary bg-primary/5",
  info: "border-l-status-progress bg-status-progress-bg",
};

const Notices = () => {
  return (
    <div className="page-container">
      <Header title="સૂચના પાટિયું" showBack />

      <main className="content-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <Bell className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg">ગામ સૂચનાઓ</h2>
            <p className="text-sm text-muted-foreground">Village Notice Board</p>
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {mockNotices.map((notice) => {
            const Icon = notice.icon;
            return (
              <div
                key={notice.id}
                className={`card-elevated p-4 border-l-4 ${typeStyles[notice.type as keyof typeof typeStyles]}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    notice.type === "urgent" 
                      ? "bg-destructive/10 text-destructive"
                      : notice.type === "announcement"
                      ? "bg-primary/10 text-primary"
                      : "bg-status-progress-bg text-status-progress"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{notice.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{notice.titleEn}</p>
                    <p className="text-sm text-muted-foreground mb-3">{notice.description}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{notice.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {mockNotices.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Bell className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>કોઈ સૂચના નથી</p>
            <p className="text-sm">No notices available</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Notices;
