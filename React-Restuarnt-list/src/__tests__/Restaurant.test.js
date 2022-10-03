import {
  fireEvent,
  getAllByTestId,
  getByTestId,
  render,
  screen,
  within,
  cleanup,
} from "@testing-library/react";
import App from "../App";
import { RestaurantCard } from "../components/RestaurantCard";
import { RestaurantDetails } from "../components/RestaurantDetails";
import ascData from "./ascData.json";
import descData from "./descData.json";
import above4 from "./above4.json";
const props = {
  id: 1,
  restaurantName: "Captain Egg",
  image:
    "https://b.zmtcdn.com/data/pictures/chains/3/18932443/e53e01a55e342a9fbaa1c523004b9c2e_o2_featured_v2.jpeg?output-format=webp",
  categories: ["Street-Food", "Fast-Food", "North-Indian"],
  min: 120,
  cost_for_one: 300,
  cost_for_two: 500,
  rating: 3.9,
  reviews: 245,
  votes: 653,
  payment: {
    card: true,
    upi: true,
    cash: false,
  },
  is_favorite: false,
};
// cleanup
beforeEach(() => {
  cleanup();
});

beforeAll(() => {
  global.score = 1;
  console.log("Rest score to: 1");
});
describe("get restaurants", () => {
  test("App renders a RestaurantCard component", () => {
    const { getByTestId } = render(<App />);
    const restaurantsCont = getByTestId("restaurants-container");
    const cardEle = within(restaurantsCont).getAllByTestId("card-item");
    expect(cardEle.length).toBe(20);
    global.score += 1;
  });

  test("Passing props to Restaurant card", () => {
    const { getByTestId } = render(<RestaurantCard {...props} />);
    const card = getByTestId("card-item");
    const cardTitle = getByTestId("card-title");
    const cardRating = getByTestId("card-rating");
    expect(cardTitle.textContent).toBe(props.restaurantName);
    expect(cardRating.textContent).toBe(props.rating.toString());
    global.score += 1;
  });

  test("rating buttons should work", () => {
    const { getByTestId, getAllByTestId } = render(<RestaurantDetails />);
    const filterBy4 = getByTestId("rating-4");
    fireEvent.click(filterBy4);
    let card = getAllByTestId("card-item");
    expect(card.length).toBe(above4.length);
    const filterBy3 = getByTestId("rating-3");
    fireEvent.click(filterBy3);
    card = getAllByTestId("card-item");
    expect(card.length).toBe(14);
    const filterBy2 = getByTestId("rating-2");
    fireEvent.click(filterBy2);
    card = getAllByTestId("card-item");
    expect(card.length).toBe(18);
    const filterBy1 = getByTestId("rating-1");
    fireEvent.click(filterBy1);
    card = getAllByTestId("card-item");
    expect(card.length).toBe(20);
    global.score += 3;
  });
  test("sort buttons should work", () => {
    const { queryByTestId } = render(<RestaurantDetails />);
    const { getByTestId, getAllByTestId } = render(
      <RestaurantCard {...props} />
    );
    const sortByAsc = queryByTestId("sortBy-asc");
    fireEvent.click(sortByAsc);
    let cardRating = getAllByTestId("card-rating");
    expect(cardRating[0].textContent).toBe(ascData[0].rating.toString());
    const sortByDesc = queryByTestId("sortBy-desc");
    fireEvent.click(sortByDesc);
    cardRating = getAllByTestId("card-rating");
    expect(cardRating[0].textContent).toBe(descData[0].rating.toString());
    global.score += 2;
  });
  test("Filter payment type should work", () => {
    const { queryByTestId } = render(<RestaurantDetails />);
    const { getByTestId, getAllByTestId } = render(
      <RestaurantCard {...props} />
    );
    const filterByCard = queryByTestId("filter-card");
    fireEvent.click(filterByCard);
    let cards = getAllByTestId("card-item");
    expect(cards.length).toBe(14);
    const filterByCash = queryByTestId("filter-cash");
    fireEvent.click(filterByCash);
    cards = getAllByTestId("card-item");
    expect(cards.length).toBe(11);
    const filterByUPI = queryByTestId("filter-upi");
    fireEvent.click(filterByUPI);
    cards = getAllByTestId("card-item");
    expect(cards.length).toBe(15);
    global.score += 2;
  });
});
afterAll(() => {
  console.log("Final Score is", global.score);
});
