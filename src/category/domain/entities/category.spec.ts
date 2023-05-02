import { Category } from "./category";

describe("Category Unit Tests", () => {
  test("constructor of category", () => {
    const category: Category = new Category({name:'Movie'});
    expect(category.props.name).toBe('Movie1');
  })
})