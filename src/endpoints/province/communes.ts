import { Bool, Num, OpenAPIRoute } from "chanfana";
import { provinceData } from "../../data";
import { z } from "zod";

export class Communes extends OpenAPIRoute {
  schema = {
    description: "Get list of Communes",
    request: {
      query: z.object({
        idDistrict: Num({
          description: "Province ID",
        }),
      }),
    },
  };
  async handle() {
    const data = await this.getValidatedData<typeof this.schema>();
    const { idDistrict } = data.query;
    return provinceData.Communes.filter(
      (district) => district.idDistrict === idDistrict
    );
  }
}
