# React- Restaurant - List
#### Tags 
Reacts , state management ,conditional rendering

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ App renders a RestaurantCard component - 1 mark
 ✅ able to pass props to Restaurant card component- 1 mark
 ✅ filter by rating should work - 3 marks
 ✅ sort function should work   - 2marks
 ✅ Filter by type of payment method should work - 2

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.
### Description
### PART-I

- Create this component RestaurantDetails
- pass an object data as prop
- Create the object also with relevant information (example: should take card payment methods, total votes, reviews, cost for one, categories etc.) (payment method and categories are mandatory)
- Make 20 of these objects
- Use map method to list all the objects
- import from the json file (example: `import data from './data.json`), and initialise as default value and store to state


![A.2](https://i.imgur.com/lMeVwr7.png)

### PART-II

- Create a button to sort the restaurants with ratings
- There should be 4 buttons. 1 star, 2 star, 3 star and 4 star
- 4 star shows restaurants above 4
- 3 star shows restaurants above 3
- 2 star shows restaurants above 2
- 1 star shows restaurants above 1
- dont try to mutate the state, rather use chaining, like `array.filter().sort().map()`

### PART-III

- Create buttons for cash , card ,upi, and all .
- On click of cash  button,  restaurants that accept cash should be stored.
- On click of card button, restaurants that accept card should be stored.
-  On click of upi button, restaurants that accept upi  should be stored.
- On click of all button, show all restaurants

HINT: you can store payment methods as a key in this fromat

```
{
    payment_methods: {
        card: true,
        cash: true,
        upi: true
    }
}
```

### PART-IV

- Create two buttons for sort high to low, and low to high
- on click of desc, show restaurants from high to low cost for 2 people
- on click of asc , show restaurants from low to high cost for 2 people

HINT: store a key called cost_for_two

- Make the filter and sort work together.
- as in  one should be able to see only restaurants which are above 4 stars and also in the descending order,



 #### **Note** 
- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.
