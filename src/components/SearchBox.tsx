import { useState } from "react";
import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router";

export default function SearchBox() {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultTrackId = searchParams.get("trackId") || "";
  const [parcelId, setParcelId] = useState(defaultTrackId);

  const handleSubmit = () => {
    if (!parcelId) return;

    setSearchParams({ trackId: parcelId });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="*:not-first:mt-2 max-w-[400px] w-full px-4 ">
      <div className="relative">
        <Input
          placeholder="Enter tracking ID..."
          type="search"
          value={parcelId}
          onChange={(e) => setParcelId(e.target.value)}
          onKeyDown={handleKeyPress}
          className="peer ps-9 pe-9  md:h-14"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <SearchIcon size={18} />
        </div>
        <button
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Submit search"
          onClick={handleSubmit}
        >
          <ArrowRightIcon size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
