/*@typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ShipSystem } from "../types";
import SystemShip from "./SystemShip";

const SystemGroup = ({
  systemGroupName,
  shipSystems,
}: {
  systemGroupName: string;
  shipSystems?: ShipSystem[];
}) => {
  const [showDetails, setShowDetails] = useState(false);
  // open_page function here
  function open_page(e: React.MouseEvent<HTMLTableRowElement>) {
    if (
      e.currentTarget.id === "s_info_icon" ||
      (e.target as any).offsetParent.id === "s_info_icon"
    )
      return;
  }
  return (
    <div className="flex items-center justify-center flex-col w-full ">
      <div className="bg-primary-900 px-4 py-[9px] flex items-center justify-between gap-2 w-[calc(100%-2px)]">
        <div className="font-bold uppercase">{systemGroupName}</div>
        <div>
          <button
            className="rounded-lg bg-primary-500 px-4 py-[7px]"
            onClick={() => setShowDetails((e) => !e)}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
      </div>
      <div className="w-full">
        <table className="border-spacing-y-[1px] border-separate w-full">
          <tbody className="[&>tr:nth-child(odd)]:bg-primary-800 [&>tr:nth-child(even)]:bg-primary-700">
            {shipSystems?.map((ship) => (
              <tr
                id={ship.name}
                className="w-full [&>td]:border [&>td]:border-primary-500 hover:!bg-primary-600 cursor-pointer active:!bg-primary-400"
                key={ship.name}
                onClick={open_page}>
                <SystemShip {...ship} showDetails={showDetails} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemGroup;
