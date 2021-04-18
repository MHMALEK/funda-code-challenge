import FundaPartnerClient from "../../client";
import { HttpMethod } from "../../../utils/http-client";

interface ObjectDetailsPayload {
  key: string;
  id: string;
}
/**
 * get Object Data from server
 */
export const getObjectDetails = (payload: ObjectDetailsPayload) => {
  const { key, id } = payload;
  return FundaPartnerClient.request<ObjectDetailsPayload, {}>(
    HttpMethod.GET,
    `feeds/Aanbod.svc/json/detail/${key}/koop/${id}/`
  );
};
