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
    
    
    
    
}

export const imageGalleryPage = new ImageGalleryPage();
