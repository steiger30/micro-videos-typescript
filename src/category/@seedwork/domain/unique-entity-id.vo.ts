import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import invalidUuidError from '../errors/invalid-uuid.error';

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = this.id || uuidv4();
    this.validate()
  }

  private validate() {
    const isValid = uuidValidate(this.id)
    if(!isValid){
      throw new invalidUuidError();
    }
  }
}