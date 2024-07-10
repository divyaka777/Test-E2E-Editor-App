// cypress/integration/pagination.spec.ts
import { paginationPage } from '../pages/paginationPage';

describe('Pagination Tests', () => {
  const pageSizes = [50, 75, 100];

  beforeEach(() => {
    // Visit the initial page where the select element is located
    paginationPage.visit();
  });

  pageSizes.forEach(size => {
    it(`C12 should paginate with ${size} items per page`, () => {
      // Check whether the user can select different pagination values
      paginationPage.selectPageSize(size);

      // Assert the URL contains the correct navigation parameters
      paginationPage.assertUrl(size);
    });
  });
});
