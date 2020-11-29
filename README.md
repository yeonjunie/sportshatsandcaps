# Online Sports Hats and Caps Shop
Sports Hats & Cats is a simple ecommerce website that sells various hats from major sports leagues in the US, notably the NBA and MLB. The website filters the different sports leagues, types of hats and by price in descending and ascending order. 
## Application's Architecture
### Components
1. <b>App.js</b>
  * Consists of all the data needed to render items
  * Create main header
  * Calls main component: catalog
2. <b>Catalog.js</b>
  * Handles filtering 1)leagues 2)style, sorting by price, adding and removing items to the cart, and calculating the total price
  * It keeps track of the current filters (league, style), price sorting (sort), list of items in the cart, and total price as states
  * The handling/filtering functions are passed into the item/button components as props
  * After the catalog list are filtered/sorted and cart items are updated, it maps to sub-components explained below.
3. <b>Dropdowns.js</b>
  * Component for filter/sort button dropdowns
  * It retrieves the current selected filter options from props and highlights it for better user experience so that users are able to know which filters are activated
  * selecting a filter/sort calls the respective functions through props in Catalog.js
4. <b>Item.js</b>
  * Component that represents a single item being sold
  * Product info can be obtained from props
  * Utilized Card component from Material UI to render each item as a card component with an image, description, and an "add to cart" button
  * Add to cart button calls the handling add function in Catalog.js through props
5. <b>CartItem.js</b>
  * Component that represents a single cart item stored in the cart
  * Retrieves essential info of the product through props
  * Is a table row from the Table component in Boostrap React
  * Clicking on the add/remove buttons of the item calls the functions from props and handles price changes accordingly in Catalog.js
