import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import invalidUuidError from '../../errors/invalid-uuid.error';
import ValueObject from './value-object';

export default class UniqueEntityId extends ValueObject<string> {
  constructor(readonly id?: string) {
    super(id || uuidv4())
    this.validate()
  }

  private validate() {
    const isValid = uuidValidate(this.value)
    if (!isValid) {
      throw new invalidUuidError();
    }
  }
}