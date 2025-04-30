
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AdminNavBar from "@/components/admin/AdminNavBar";
import AdminDashboard from "@/components/admin/AdminDashboard";
import ProductsSection from "@/components/admin/ProductsSection";
import ServicesSection from "@/components/admin/ServicesSection";
import AppointmentsSection from "@/components/admin/AppointmentsSection";
import ClientsSection from "@/components/admin/ClientsSection";
import { Tabs, TabsContent } from "@/components/ui/tabs";

/**
 * Административная панель для управления салоном красоты
 */
const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Боковое меню */}
          <AdminNavBar activeTab={activeTab} onTabChange={handleTabChange} />
          
          {/* Основная область */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Вкладка Обзор */}
              <TabsContent value="dashboard">
                <AdminDashboard />
              </TabsContent>
              
              {/* Вкладка Товары */}
              <TabsContent value="products">
                <ProductsSection />
              </TabsContent>
              
              {/* Вкладка Услуги */}
              <TabsContent value="services">
                <ServicesSection />
              </TabsContent>
              
              {/* Вкладка Записи */}
              <TabsContent value="appointments">
                <AppointmentsSection />
              </TabsContent>
              
              {/* Вкладка Клиенты */}
              <TabsContent value="clients">
                <ClientsSection />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
