
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Package, Calendar, Scissors } from "lucide-react";

interface AdminNavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
}

const AdminNavBar = ({ activeTab, onTabChange }: AdminNavBarProps) => {
  const navItems: NavItem[] = [
    { id: "dashboard", label: "Обзор", icon: <BarChart3 className="mr-2 h-4 w-4" /> },
    { id: "products", label: "Товары", icon: <Package className="mr-2 h-4 w-4" /> },
    { id: "services", label: "Услуги", icon: <Scissors className="mr-2 h-4 w-4" /> },
    { id: "appointments", label: "Записи", icon: <Calendar className="mr-2 h-4 w-4" /> },
    { id: "clients", label: "Клиенты", icon: <Users className="mr-2 h-4 w-4" /> },
  ];

  return (
    <div className="w-full md:w-64 bg-card rounded-lg p-4 shadow">
      <h2 className="font-bold text-xl mb-6 text-primary">Админ-панель</h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Button 
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"} 
            className="w-full justify-start" 
            onClick={() => onTabChange(item.id)}
          >
            {item.icon}
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default AdminNavBar;
