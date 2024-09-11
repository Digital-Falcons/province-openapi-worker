import { OpenAPIRoute } from "chanfana";
import { provinceData } from "../../data";

export class Countries extends OpenAPIRoute {
  handle() {
    return provinceData.Countries;
  }
}
