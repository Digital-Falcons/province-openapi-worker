import { Bool, Num, OpenAPIRoute } from "chanfana";
import { provinceData } from "../../data";
import { z } from "zod";

export class District extends OpenAPIRoute {
  schema = {
    description: "Get list of District",
    request: {
      query: z.object({
        idProvince: Num({
          description: "Province ID",
        }),
      }),
    },
  };
  async handle() {
    const data = await this.getValidatedData<typeof this.schema>();
    const { idProvince } = data.query;
    return provinceData.Districts.filter(
      (district) => district.idProvince === idProvince
    );
  }
}
