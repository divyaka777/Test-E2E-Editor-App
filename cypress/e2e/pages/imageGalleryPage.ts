class ImageGalleryPage
{
    visit(){
        cy.visit('/')
    }

    getHomeText() {
        return cy.contains('Home')
      }
    getImageElement(index = 0) {
        
        return cy.get('img').eq(index)
      }
    getWidthInput() {
        return cy.get('#width-input')
      }
    getHeightInput() {
        return cy.get('#height-input')
      }
    getGreyScale()
      {
        return cy.get ('[id="greyscale-input"]')
      }
    getDownloadImageElement() {
        return cy.get('[aria-label="Download edited image"]')
      }
    getBlurScaleElement(){
        return cy.get('[id="blur-input"]').invoke('val',5)
    }
    getDiscardChangesElement() {
        return cy.get('[aria-label="Discard changes to the image"]')
      }
    
    
    
}

export const imageGalleryPage = new ImageGalleryPage();
