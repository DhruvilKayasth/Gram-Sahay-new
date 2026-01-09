import { useState } from "react";
import { Trash2, Lightbulb, Droplets, Route, FileCheck, Camera, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";
import { CategoryButton } from "@/components/CategoryButton";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: "garbage", icon: Trash2, label: "કચરો", labelEn: "Garbage" },
  { id: "streetlight", icon: Lightbulb, label: "સ્ટ્રીટ લાઇટ", labelEn: "Street Light" },
  { id: "water", icon: Droplets, label: "પાણી", labelEn: "Water" },
  { id: "road", icon: Route, label: "રસ્તો", labelEn: "Road" },
  { id: "documents", icon: FileCheck, label: "દસ્તાવેજ", labelEn: "Documents" },
];

const FileComplaint = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCategory) {
      toast({
        title: "શ્રેણી પસંદ કરો",
        description: "Please select a category",
        variant: "destructive",
      });
      return;
    }

    // Mock submission
    toast({
      title: "ફરિયાદ નોંધાઈ ગઈ!",
      description: "તમારી ફરિયાદ સફળતાપૂર્વક નોંધાઈ ગઈ છે",
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="page-container">
      <Header title="નવી ફરિયાદ" showBack />

      <main className="content-container">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category Selection */}
          <div>
            <h2 className="section-title">શ્રેણી પસંદ કરો</h2>
            <p className="text-sm text-muted-foreground mb-4">Select Category</p>
            <div className="grid grid-cols-3 gap-3">
              {categories.map((cat) => (
                <CategoryButton
                  key={cat.id}
                  icon={cat.icon}
                  label={cat.label}
                  labelEn={cat.labelEn}
                  selected={selectedCategory === cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="section-title">વર્ણન લખો</h2>
            <p className="text-sm text-muted-foreground mb-3">Write Description (Optional)</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="તમારી સમસ્યા અહીં લખો..."
              className="w-full min-h-[120px] p-4 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <h2 className="section-title">ફોટો અપલોડ કરો</h2>
            <p className="text-sm text-muted-foreground mb-3">Upload Photo (Optional)</p>
            
            <label className="block">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoChange}
                className="hidden"
              />
              {photoPreview ? (
                <div className="relative">
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-xl border"
                  />
                  <button
                    type="button"
                    onClick={() => setPhotoPreview(null)}
                    className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-2 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-xl border-2 border-dashed border-border hover:border-primary cursor-pointer transition-colors">
                  <Camera className="w-10 h-10 text-muted-foreground" />
                  <span className="text-muted-foreground">ફોટો લો / અપલોડ કરો</span>
                </div>
              )}
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn-primary-large flex items-center justify-center gap-3"
          >
            <Send className="w-5 h-5" />
            <span>ફરિયાદ મોકલો</span>
          </button>
        </form>
      </main>

      <BottomNav />
    </div>
  );
};

export default FileComplaint;
