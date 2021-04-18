import HttpClient from "../../utils/http-client";

/**
 * Funda client that interacts with base Funda APIs
 */
const FundaPartnerApiClient = new HttpClient(process.env.BASE_API_URL);

export default FundaPartnerApiClient;
