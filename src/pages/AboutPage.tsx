
import Layout from "@/components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">О нашем салоне</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Наша история</h2>
            <p className="text-gray-700">
              Парикмахерская "Стиль" была основана в 2010 году с целью предоставления высококачественных услуг 
              по уходу за волосами и красотой в уютной и дружественной атмосфере. За эти годы мы превратились 
              в один из самых уважаемых салонов красоты города.
            </p>
            <p className="text-gray-700">
              Наша команда состоит из профессионалов высшего класса, которые постоянно совершенствуют 
              свои навыки и следят за последними тенденциями в индустрии красоты.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Наша команда" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-3 text-primary">Качество</h3>
              <p className="text-gray-700">Мы используем только профессиональные продукты премиум-класса и предлагаем услуги высочайшего качества.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-3 text-primary">Профессионализм</h3>
              <p className="text-gray-700">Наши мастера регулярно проходят обучение и повышают квалификацию, чтобы предоставлять вам лучшие услуги.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium mb-3 text-primary">Индивидуальный подход</h3>
              <p className="text-gray-700">Мы внимательно относимся к пожеланиям каждого клиента и подбираем услуги под его индивидуальные особенности.</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Мастер Анна" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium mb-1 text-primary">Анна Сергеева</h3>
                <p className="text-gray-500 mb-3">Старший стилист</p>
                <p className="text-gray-700">Опыт работы более 10 лет. Специализируется на сложных стрижках и окрашивании.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Мастер Максим" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium mb-1 text-primary">Максим Петров</h3>
                <p className="text-gray-500 mb-3">Барбер</p>
                <p className="text-gray-700">Создает безупречные мужские стрижки и оформление бороды. Победитель городского конкурса барберов.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Мастер Елена" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium mb-1 text-primary">Елена Иванова</h3>
                <p className="text-gray-500 mb-3">Колорист</p>
                <p className="text-gray-700">Эксперт в создании уникальных цветовых решений. Прошла обучение в ведущих школах Европы.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
