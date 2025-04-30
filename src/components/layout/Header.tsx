
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Стиль и Красота</Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/services/haircut" className="group p-3 rounded-md hover:bg-accent">
                      <div className="font-medium">Стрижки</div>
                      <div className="text-sm text-muted-foreground">Мужские и женские стрижки</div>
                    </Link>
                    <Link to="/services/coloring" className="group p-3 rounded-md hover:bg-accent">
                      <div className="font-medium">Окрашивание</div>
                      <div className="text-sm text-muted-foreground">Все виды окрашивания волос</div>
                    </Link>
                    <Link to="/services/styling" className="group p-3 rounded-md hover:bg-accent">
                      <div className="font-medium">Укладка</div>
                      <div className="text-sm text-muted-foreground">Праздничные и повседневные укладки</div>
                    </Link>
                    <Link to="/services/cosmetic" className="group p-3 rounded-md hover:bg-accent">
                      <div className="font-medium">Косметические услуги</div>
                      <div className="text-sm text-muted-foreground">Уход за лицом и телом</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/products">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Товары
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  О нас
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contacts">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Контакты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-4">
          <Link to="/cart" className="flex items-center gap-1 hover:text-accent-foreground">
            <ShoppingCart size={20} />
            <span>Корзина</span>
          </Link>
          <Link to="/admin" className="flex items-center gap-1 hover:text-accent-foreground">
            <User size={20} />
            <span>Админ</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
