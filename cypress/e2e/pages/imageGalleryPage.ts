class ImageGalleryPage
{
    visit(){
        cy.visit('/')
    }

    getHomeText() {
        return cy.contains('Home')
      }
    getImageElement() {
        return cy.get('img[alt="Image by Alejandro Escamilla"]')
      }
    getWidthInput() {
        return cy.get('#width-input')
      }
    getHeightInput() {
        return cy.get('#height-input')
      }
    getDownloadImageElement() {
        return cy.contains('font', 'Download Image')
      }

    getDiscardChangesElement() {
        return cy.contains('font', 'Discard Changes')
      }
    
    
    
}

export const imageGalleryPage = new ImageGalleryPage();
