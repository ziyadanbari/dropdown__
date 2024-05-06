import { useState } from "react";
import SystemGroup from "./components/SystemGroup";
import chipSystemData from "./data/chip_system";

function App() {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <div className="flex items-center justify-start w-full h-full flex-col gap-[1px] relative mb-5">
        <div className="basis-14 h-14 w-full bg-primary-500" />
        <div className={`w-full h-full absolute top-full mt-[1px]`}>
          <div
            className={`custom_scroll_y flex-1 bg-primary-500 w-full grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6  overflow-y-auto transition-all duration-500 px-6 py-4  ${
              showDropDown
                ? " max-h-[calc(100vh-56px-56px-20px)] "
                : " max-h-0 !py-0"
            }`}>
            {chipSystemData.columns.map((column) => (
              <div
                className="flex flex-col items-start justify-start gap-4 w-full"
                key={column.index}>
                {column.systems.map((system) => (
                  <SystemGroup
                    key={system.system_group}
                    systemGroupName={system.system_group}
                    shipSystems={system.ship_systems}
                  />
                ))}
              </div>
            ))}
          </div>
          <div
            className="h-5 bg-primary-700 flex justify-center items-center cursor-pointer"
            onClick={() => setShowDropDown((e) => !e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none">
              <path d="M8 0L16 8H0L8 0Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
