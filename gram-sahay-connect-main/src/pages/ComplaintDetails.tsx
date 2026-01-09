import { useParams } from "react-router-dom";
import { Trash2, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";
import { StatusBadge } from "@/components/ui/StatusBadge";

const mockComplaint = {
  id: "2024001",
  category: "કચરો",
  categoryEn: "Garbage",
  description: "શેરી નંબર ૫ માં કચરો પડેલો છે, કૃપા કરીને સાફ કરો. આ સમસ્યા એક અઠવાડિયાથી છે.",
  status: "progress" as const,
  createdAt: "૦૫ જાન્યુઆરી ૨૦૨૪",
  timeline: [
    { date: "૦૫ જાન્યુઆરી", status: "submitted", label: "ફરિયાદ નોંધાઈ", labelEn: "Complaint Filed" },
    { date: "૦૬ જાન્યુઆરી", status: "reviewed", label: "સમીક્ષા થઈ", labelEn: "Reviewed" },
    { date: "૦૭ જાન્યુઆરી", status: "assigned", label: "કર્મચારીને સોંપાઈ", labelEn: "Assigned" },
  ],
  adminRemark: "સફાઈ કર્મચારીને સોંપવામાં આવ્યું છે. કાલે સવારે સફાઈ થશે.",
};

const ComplaintDetails = () => {
  const { id } = useParams();

  return (
    <div className="page-container">
      <Header title="ફરિયાદ વિગત" showBack />

      <main className="content-container">
        {/* Ticket Info */}
        <div className="card-elevated p-4 mb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-bold text-lg">{mockComplaint.category}</h2>
                <p className="text-sm text-muted-foreground">{mockComplaint.categoryEn}</p>
              </div>
            </div>
            <StatusBadge status={mockComplaint.status} />
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">ટિકિટ ID:</span>
              <span className="font-mono font-medium">#{mockComplaint.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">તારીખ:</span>
              <span>{mockComplaint.createdAt}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="card-elevated p-4 mb-4">
          <h3 className="font-semibold mb-2">વર્ણન</h3>
          <p className="text-muted-foreground">{mockComplaint.description}</p>
        </div>

        {/* Timeline */}
        <div className="card-elevated p-4 mb-4">
          <h3 className="font-semibold mb-4">સ્થિતિ ટાઇમલાઇન</h3>
          <div className="space-y-4">
            {mockComplaint.timeline.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  {index < mockComplaint.timeline.length - 1 && (
                    <div className="w-0.5 h-8 bg-border mt-1" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.labelEn}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                </div>
              </div>
            ))}
            
            {/* Pending Step */}
            <div className="flex gap-3 opacity-50">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-border flex items-center justify-center">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <p className="font-medium">પૂર્ણ થશે</p>
                <p className="text-xs text-muted-foreground">Resolution Pending</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Remarks */}
        {mockComplaint.adminRemark && (
          <div className="card-elevated p-4 border-l-4 border-l-primary">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <h3 className="font-semibold">અધિકારી ટિપ્પણી</h3>
            </div>
            <p className="text-muted-foreground text-sm">{mockComplaint.adminRemark}</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default ComplaintDetails;
