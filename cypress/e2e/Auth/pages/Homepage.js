export class HomePage {
  url = "https://www.edu.goit.global/account/login";
  selectorEmail = "#user_email";
  selectorPassword = "#user_password";
  manePage() {
    cy.visit(this.url);
  }
  getAuth(email, password) {
    cy.get(this.selectorEmail).type(email);
    cy.get(this.selectorPassword).type(password);
    cy.get(".css-1jphuq5").click();
  }
}
