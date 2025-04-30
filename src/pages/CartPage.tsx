
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { ShoppingCart, Trash2, ChevronLeft, CreditCard } from "lucide-react";

// Тип для элемента корзины
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  // Временные данные о товарах в корзине
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Шампунь для окрашенных волос",
      price: 1200,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1626766940297-832a4820a10f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Термозащитный спрей",
      price: 1100,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1631730359585-38a5ddd85fbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const discountRate = 0.1; // 10% скидка

  // Изменение количества товара
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Удаление товара из корзины
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast({
      title: "Товар удален из корзины",
      description: "Товар был успешно удален из вашей корзины",
    });
  };

  // Применение промокода
  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "HAIR2025") {
      setDiscountApplied(true);
      toast({
        title: "Промокод применен",
        description: "Скидка 10% успешно применена к вашему заказу",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Введенный промокод недействителен",
      });
    }
  };

  // Очистка корзины
  const clearCart = () => {
    setCartItems([]);
    setDiscountApplied(false);
    setPromoCode("");
    toast({
      title: "Корзина очищена",
      description: "Все товары были удалены из вашей корзины",
    });
  };

  // Оформление заказа
  const checkout = () => {
    toast({
      title: "Заказ оформлен",
      description: "Ваш заказ был успешно оформлен. Мы свяжемся с вами для подтверждения.",
    });
    setCartItems([]);
    setDiscountApplied(false);
    setPromoCode("");
  };

  // Расчет итоговой стоимости
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = discountApplied ? subtotal * discountRate : 0;
  const total = subtotal - discount;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">Корзина</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Ваша корзина пуста</h2>
            <p className="text-gray-500 mb-6">Добавьте товары в корзину, чтобы продолжить покупки</p>
            <Link to="/products">
              <Button>Перейти к товарам</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-primary">
                    Товары в корзине ({cartItems.length})
                  </h2>
                  <Button variant="outline" size="sm" onClick={clearCart}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Очистить
                  </Button>
                </div>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center border-b pb-4">
                      <div className="md:col-span-2 flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 object-cover rounded"
                        />
                        <div>
                          <Link to={`/products/${item.id}`} className="font-medium text-primary hover:underline">
                            {item.name}
                          </Link>
                          <p className="text-gray-500">Цена: {item.price} ₽</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <span className="mx-3 w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="text-right md:text-center font-semibold">
                        {item.price * item.quantity} ₽
                      </div>
                      <div className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link to="/products" className="inline-flex items-center text-primary hover:underline">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Продолжить покупки
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6 text-primary">Итого</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Товаров на сумму:</span>
                    <span>{subtotal} ₽</span>
                  </div>
                  
                  {discountApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Скидка:</span>
                      <span>-{discount} ₽</span>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Итого к оплате:</span>
                    <span className="text-primary">{total} ₽</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={discountApplied}
                    />
                    <Button 
                      variant="outline" 
                      onClick={applyPromoCode}
                      disabled={discountApplied || !promoCode}
                    >
                      Применить
                    </Button>
                  </div>
                  
                  <Button className="w-full" onClick={checkout}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Оформить заказ
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку "Оформить заказ", вы соглашаетесь с условиями обработки персональных данных
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
