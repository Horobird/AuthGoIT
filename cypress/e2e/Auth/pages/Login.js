export class Login {
  selectorMenu = "#open-navigation-menu-mobile";
  selectorLogOut = ":nth-child(11) > .css-bve2vl";
  navPage() {
    cy.get(this.selectorMenu).click();
    cy.get(this.selectorLogOut).click();
  }
}
