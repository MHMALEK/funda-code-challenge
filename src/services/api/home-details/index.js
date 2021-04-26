import FundaPartnerClient from "../../client";
import { HttpMethod } from "../../../utils/http-client";

/**
 * get Object Data from server
 */
export const fetchHomeObjectDetails = (payload) => {
  const { houseId, key } = payload;
  return FundaPartnerClient.request(
    HttpMethod.GET,
    `feeds/Aanbod.svc/json/detail/${key}/koop/${houseId}/`
  );
};
