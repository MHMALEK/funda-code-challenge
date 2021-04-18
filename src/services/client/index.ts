import HttpClient from "../../utils/http-client";

/**
 * Funda client that interacts with base Funda APIs
 */

const FundaPartnerApiClient = new HttpClient(import.meta.env.VITE_BASE_API_URL);

export default FundaPartnerApiClient;
