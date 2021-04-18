import { fetchHomeObjectDetails } from "../../../services/api/home-details";
import { ref, onMounted } from "vue";
import { useGetHouseDetailsPayload, useGetHouseDetailsResult } from "./model";

function useGetHouseDetails({
  houseId,
  key,
}: useGetHouseDetailsPayload): useGetHouseDetailsResult {
  const houseDetails = ref({});
  const getHouseDetails = async () => {
    houseDetails.value = await fetchHomeObjectDetails({ houseId, key });
  };

  onMounted(getHouseDetails);

  return {
    houseDetails,
    getHouseDetails,
  };
}

export default useGetHouseDetails;
