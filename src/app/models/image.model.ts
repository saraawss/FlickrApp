import {Deserializable} from "./deserializable.model";

export class Image implements Deserializable {
  image: string;
  title: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}