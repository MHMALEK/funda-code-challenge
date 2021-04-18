import FundaPartnerClient from "../../client";
import { HttpMethod } from "../../../utils/http-client";

interface ObjectDetailsPayload {
  key: string;
  houseId: string;
}
/**
 * get Object Data from server
 */
export const fetchHomeObjectDetails = (payload: ObjectDetailsPayload) => {
  const { houseId, key } = payload;
  return FundaPartnerClient.request<ObjectDetailsPayload, {}>(
    HttpMethod.GET,
    `feeds/Aanbod.svc/json/detail/${key}/koop/${houseId}/`
  );
};
