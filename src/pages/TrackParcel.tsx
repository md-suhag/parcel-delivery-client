import TrackParcelDetails from "@/components/modules/parcel/TrackParcelDetails";
import SearchBox from "@/components/SearchBox";

const TrackParcel = () => {
  return (
    <div className="container mx-auto mb-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8 text-primary">
        Track Your parcel
      </h1>
      <div className="flex justify-center ">
        <SearchBox />
      </div>
      <TrackParcelDetails />
    </div>
  );
};

export default TrackParcel;
