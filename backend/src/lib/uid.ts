import { ulid } from "ulid";

export default class IdGenerator {
  static generate():string {
    return ulid(Date.now()).toLowerCase();
  }
}