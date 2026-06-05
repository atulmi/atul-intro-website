describe('Portfolio Site', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Hero section', () => {
    it('displays name and title', () => {
      cy.contains('Atul Murali').should('be.visible')
      cy.contains('Web Developer').should('be.visible')
    })

    it('has working View Experience and View Projects CTAs', () => {
      cy.contains('View Experience').should('have.attr', 'href', '#experience')
      cy.contains('View Projects').should('have.attr', 'href', '#projects')
    })

    it('links to GitHub and LinkedIn', () => {
      cy.get('a[href="https://github.com/atulmi"]').should('exist')
      cy.get('a[href*="linkedin.com/in/atul-murali"]').should('exist')
    })
  })

  context('Navigation', () => {
    it('navbar contains all section links', () => {
      const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']
      links.forEach((label) => {
        cy.get('header').contains(label).should('exist')
      })
    })
  })

  context('Sections', () => {
    it('all section IDs exist on the page', () => {
      ['about', 'skills', 'experience', 'projects', 'education', 'contact'].forEach((id) => {
        cy.get(`#${id}`).should('exist')
      })
    })
  })

  context('Experience section', () => {
    it('shows all employers', () => {
      cy.get('#experience').within(() => {
        cy.contains('Manetu').should('exist')
        cy.contains('Vivid Kids Foundation').should('exist')
        cy.contains('Smart Connections Consulting').should('exist')
        cy.contains('Rocket Communications').should('exist')
        cy.contains('NeuroLeap').should('exist')
      })
    })

    it('has a contact link at the bottom', () => {
      cy.get('#experience').contains('Interested? Get in touch.').should('have.attr', 'href', '#contact')
    })
  })

  context('Projects section', () => {
    it('shows all project cards', () => {
      cy.get('#projects').within(() => {
        cy.contains('Wikipedia Country Notes').should('exist')
        cy.contains('This Portfolio Site').should('exist')
        cy.contains('Personal Python Projects').should('exist')
      })
    })

    it('project GitHub links point to real repos', () => {
      cy.get('#projects').within(() => {
        cy.get('a[href*="github.com/atulmi"]').should('have.length.at.least', 3)
      })
    })

    it('portfolio site card has a GitHub link', () => {
      cy.get('#projects').contains('This Portfolio Site').closest('.MuiCard-root').within(() => {
        cy.get('a[href*="github.com/atulmi"]').should('exist')
      })
    })
  })

  context('Skills section', () => {
    it('shows all skill categories', () => {
      cy.get('#skills').within(() => {
        cy.contains('Frontend').should('exist')
        cy.contains('Backend & Databases').should('exist')
        cy.contains('Tools').should('exist')
      })
    })
  })

  context('Education section', () => {
    it('shows degree and university', () => {
      cy.get('#education').within(() => {
        cy.contains('San Jose State University').should('exist')
        cy.contains('Software Engineering').should('exist')
      })
    })

    it('shows Google Cloud certification', () => {
      cy.get('#education').contains('Google Cloud').should('exist')
    })
  })

  context('Contact section', () => {
    it('has a mailto link with correct email', () => {
      cy.get('#contact').get('a[href="mailto:atul.murali@outlook.com"]').should('exist')
    })
  })
})
