import { it } from "@babel/types";

describe('Test main page', () => {
  it('make shure it creates localhost', () => {
    cy.visit('http://localhost:8080');
  });
});
