export class Login {
  selectorMenu = "#open-navigation-menu-mobile";
  selectorLogOut = ":nth-child(11) > .css-bve2vl";
  navPage() {
    cy.get(this.selectorMenu).click();
    cy.get(this.selectorLogOut).click();
  }
  alertWindow() {
    cy.on("window:alert", (text) => {
      expect("Arname or password has been submittedn incorrect use").to.eq(
        "alert text"
      );
    });
  }
}
