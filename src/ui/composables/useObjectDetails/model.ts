interface useGetHouseDetailsPayload {
  houseId: string;
  key: string;
}

interface useGetHouseDetailsResult {
  houseDetails: object;
  getHouseDetails: () => Promise<void>;
}

export { useGetHouseDetailsPayload, useGetHouseDetailsResult };
