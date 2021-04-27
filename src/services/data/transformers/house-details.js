const houseDetailsDataTransformer = (data) => {
  const {
    AangebodenSinds,
    AantalBadkamers,
    AantalKamers,
    Adres,
    Bouwjaar,
    Energielabel,
    Ligging,
    Makelaar,
    MakelaarTelefoon,
    Titels,
    WGS84_X,
    WGS84_Y,
    Media,
  } = data;

  const mapLocations = {
    lat: WGS84_Y,
    lng: WGS84_X,
  };
  const title = Titels[0] && Titels[0].Omschrijving;
  const energielabel = Energielabel.Label;

  const media = Media.splice(0, 4);

  const transformedData = {
    aangebodenSinds: AangebodenSinds,
    aantalBadkamers: AantalBadkamers,
    aantalKamers: AantalKamers,
    adres: Adres,
    bouwjaar: Bouwjaar,
    energielabel,
    ligging: Ligging,
    makelaar: Makelaar,
    makelaarTelefoon: MakelaarTelefoon,
    title,
    mapLocations,
    media,
  };
  return transformedData;
};

export default houseDetailsDataTransformer;
