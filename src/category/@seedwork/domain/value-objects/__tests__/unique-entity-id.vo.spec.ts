import invalidUuidError from "../../../errors/invalid-uuid.error"
import UniqueEntityId from "../unique-entity-id.vo"

function spyValidateMethod() {
  return jest.spyOn(UniqueEntityId.prototype as any, 'validate')
}
describe("UniqueEntityId Unit Tests", () => {
  it('should throw error when uuid is invalid', () => {
    const validateSpy = spyValidateMethod()
    expect(() => new UniqueEntityId("fake id")).toThrow(new invalidUuidError())
    expect(validateSpy).toHaveBeenCalled()
  })
  it('should accept a uuid passed in constructor', () => {
    const validateSpy = spyValidateMethod()
    const uuid = "31591f48-a70d-455d-828e-b41a53ff0c90"
    const vo = new UniqueEntityId(uuid)
    expect(vo.value).toBe(uuid)
    expect(validateSpy).toHaveBeenCalled()
  })

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = spyValidateMethod()
    const vo = new UniqueEntityId()
    expect(vo.value).toBeTruthy()
    expect(validateSpy).toHaveBeenCalled()
  })
})