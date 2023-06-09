import { omit } from "lodash";
import { Category, CategoryProperties } from "./category";
import UniqueEntityId from "../../@seedwork/domain/value-objects/unique-entity-id.vo";
describe("Category Unit Tests", () => {
  test("constructor of category", () => {

    let category = new Category({
      name: 'Movie',
    });
    let props = omit(category.props, 'created_at');
    expect(props).toStrictEqual({
      name: 'Movie',
      description: null,
      is_active: true,
    })
    expect(category.props.created_at).toBeInstanceOf(Date);



    let created_at: Date = new Date()
    category = new Category({
      name: "Movie",
      description: "some Description",
      is_active: false,
      created_at
    })
    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: "some Description",
      is_active: false,
      created_at
    })



    category = new Category({
      name: "Movie",
      description: "other Description",
    })
    expect(category.props).toMatchObject({
      name: 'Movie',
      description: "other Description",
    })



    category = new Category({
      name: "Movie",
      is_active: true,
    })
    expect(category.props).toMatchObject({
      name: 'Movie',
      is_active: true,
    })



    created_at = new Date()
    category = new Category({
      name: "Movie",
      created_at,
    })
    expect(category.props).toMatchObject({
      name: 'Movie',
      created_at,
    })


  })

  test('id field', () => {
    type CategoryData = { props: CategoryProperties, id?: UniqueEntityId }
    const data: CategoryData[] = [
      { props: { name: "Movie" } },
      { props: { name: "Movie" }, id: null },
      { props: { name: "Movie" }, id: undefined },
      { props: { name: "Movie" }, id: new UniqueEntityId() },
    ]
    data.forEach((value) => {
      const category = new Category(value.props, value.id as any);
      expect(category.id).not.toBeNull();
      expect(category.id).toBeInstanceOf(UniqueEntityId);
    })
    // let category = new Category({ name: 'Movie' });
    // expect(category.id).not.toBeNull();
    // expect(uuidValidate(category.id)).toBeTruthy();

    // category = new Category({ name: 'Movie' }, null);
    // expect(category.id).not.toBeNull();
    // expect(uuidValidate(category.id)).toBeTruthy();

    // category = new Category({ name: 'Movie' }, undefined);
    // expect(category.id).not.toBeNull();
    // expect(uuidValidate(category.id)).toBeTruthy();

    // category = new Category({ name: 'Movie' },'78521dda-3aa7-43be-992c-e87b48457974');
    // expect(category.id).not.toBeNull();
    // expect(uuidValidate(category.id)).toBeTruthy();
  })

  test("getter of name props", () => {
    const category = new Category({ name: "Movie" });
    expect(category.name).toBe('Movie');
  })
  test("getter and setter of description props", () => {
    let category = new Category({ name: "Movie" });
    expect(category.description).toBeNull();

    category = new Category({ name: "Movie", description: 'some description' });
    expect(category.description).toBe('some description');

    category = new Category({ name: "Movie" });

    category['description'] = "other description"
    expect(category.description).toBe('other description');

    category['description'] = undefined
    expect(category.description).toBeNull();
  })

  test('getter and setter of is_active prop', () => {
    let category = new Category({ name: "Movie" });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_active: true
    })
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_active: false
    })
    expect(category.is_active).toBeFalsy();
  })

  test('getter of created_at prop', () => {
    let category = new Category({ name: "Movie" });
    expect(category.created_at).toBeInstanceOf(Date)
    let created_at = new Date()
    category = new Category({ name: "Movie", created_at });
    expect(category.created_at).toBe(created_at)
  })
})