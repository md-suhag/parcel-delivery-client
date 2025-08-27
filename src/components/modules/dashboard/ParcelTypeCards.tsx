import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, FileText } from "lucide-react";
import type { ITotalParcelByParcelType } from "@/types";

type ParcelType = "DOCUMENT" | "REGULAR";

interface IProps {
  typeInfo: ITotalParcelByParcelType[];
  total: number;
}

const getTypeStyles = (type: ParcelType) => {
  switch (type) {
    case "DOCUMENT":
      return {
        color: "text-blue-400",

        icon: <FileText className="w-6 h-6" />,
      };
    case "REGULAR":
      return {
        color: "text-green-400",

        icon: <Package className="w-6 h-6" />,
      };
    default:
      return {
        color: "text-gray-600",

        icon: <Package className="w-6 h-6" />,
      };
  }
};

const ParcelTypeCards = ({ typeInfo, total }: IProps) => {
  return (
    <section className="">
      <h1 className="text-2xl font-semibold text-primary my-6">Parcel Types</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className=" shadow-md hover:shadow-xl transition-shadow duration-300 ">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium text-primary">
              Total
            </CardTitle>
            <Package className="w-6 h-6 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{total}</p>
          </CardContent>
        </Card>
        {typeInfo.map((item, index) => {
          const { color, icon } = getTypeStyles(item.type as ParcelType);
          return (
            <Card
              key={index}
              className={`hover:shadow-xl transition-shadow duration-300 `}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className={`text-lg font-medium ${color}`}>
                  {item.type}
                </CardTitle>
                <div className={color}>{icon}</div>
              </CardHeader>
              <CardContent>
                <p className={`text-3xl font-bold ${color}`}>{item.count}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ParcelTypeCards;
