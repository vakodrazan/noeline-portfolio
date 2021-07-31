describe("IndexPage", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders", () => {
    cy.findByTestId("animated-heading").should("exist")
  })

  it("renders all sections", () => {
    cy.get("#hero").should("exist")
    cy.get("#about").should("exist")
    cy.get("#projects").should("exist")
    cy.get("#contact").should("exist")
  })

  it("is animated", () => {
    cy.wait(2000) // wait for animation
    cy.findByTestId("animated-heading").should("have.css", "opacity", "1")
  })

  it("renders cookie bar if activated", () => {
    cy.get("#layout-wrapper").then(elem => {
      if (elem.attr("data-usecookiebar") === "true") {
        cy.get("button#confirm").should("exist")
      } else {
        cy.get("button#confirm").should("not.exist")
      }
    })
  })
})
