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
    getNextPage() {
        return cy.get('[aria-label="Next page"]')
    }
    getPreviousPage() {
        return cy.get('[aria-label="Previous page"]')
    }
  
            
        
      
      
    
    
    
}

export const imageGalleryPage = new ImageGalleryPage();
