import invalidUuidError from "../errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id.vo"

describe("UniqueEntityId Unit Tests", () => {
  it('should throw error when uuid is invalid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    expect(() => new UniqueEntityId("fake id")).toThrow(new invalidUuidError())
    expect(validateSpy).toHaveBeenCalled()
  })
  it('should accept a uuid passed in constructor', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    const uuid = "31591f48-a70d-455d-828e-b41a53ff0c90"
    const vo = new UniqueEntityId(uuid)
    expect(vo.id).toBe(uuid)
    expect(validateSpy).toHaveBeenCalled()
  })

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    const vo = new UniqueEntityId()
    expect(vo.id).toBeTruthy()
    expect(validateSpy).toHaveBeenCalled()
  })
})