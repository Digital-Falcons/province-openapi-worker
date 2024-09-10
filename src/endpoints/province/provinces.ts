import { OpenAPIRoute } from "chanfana";
import { provinceData } from "../../data";

export class Provinces extends OpenAPIRoute {
  handle() {
    return provinceData.Provinces;
  }
}
