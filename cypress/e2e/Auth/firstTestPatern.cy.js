//Принимаем класс для входа в Homepage
import { HomePage } from "./pages/Homepage";
const homePage = new HomePage();

//Принимаем класс для входа в Login
import { Login } from "./pages/Login";
const loginPage = new Login();

//Принимаем массив данных для выпоолнения 3 тестов
import { homePageTests } from "./pages/date/homePageTests";

//Выполняем тесты
describe("Авторизация", {browser: 'chrome'}, () => {
    for (let homePageTest of homePageTests) {
      it(homePageTest.name, () => {
        homePage.manePage();
        homePage.getAuth(
          homePageTest.email,
          homePageTest.password
        );
        loginPage.navPage();
      });
    }
  
});
