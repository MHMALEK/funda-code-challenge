import { fetchHomeObjectDetails } from "../../../services/api/home-details";
import { ref, onMounted } from "vue";

function useGetHouseDetails({ houseId, key }) {
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
