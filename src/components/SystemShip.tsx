import { ShipSystem } from "../types";
import SInfoIcon from "../assets/s_info.svg";
const getColorDegrees = (
  active: number,
  invalid: number,
  suppressed: number,
  faded: number
) => {
  const total = active + invalid + suppressed + faded;

  if (total === 0) {
    return {
      red: 0,
      yellow: 0,
      white: 100,
    };
  }

  return {
    red: 360 * (active / total),
    yellow: 360 * (invalid / total),
    white: 360 * ((suppressed + faded) / total),
  };
};

const SystemShip = ({
  name,
  active_alarms,
  invalid_states,
  suppressed_alarms,
  faded_alarms,
  showDetails = false,
}: ShipSystem & { showDetails: boolean }) => {
  const colors: { [key: string]: string } = {
    red: "var(--alarm-500)",
    yellow: "var(--warning-500)",
    white: "#fff",
  };
  const shipColors: { [key: string]: string | number } = {
    red: active_alarms,
    yellow: invalid_states,
    white: suppressed_alarms + faded_alarms,
  };
  const {
    red = 0,
    yellow = 0,
    white = 0,
  } = getColorDegrees(
    active_alarms,
    invalid_states,
    suppressed_alarms,
    faded_alarms
  );
  const background = `conic-gradient(
    transparent 0deg 10deg,
    var(--alarm-500) 10deg ${red}deg,
    transparent ${red}deg ${red + 10}deg,
    var(--warning-500) ${red + 10}deg ${red + yellow}deg,
    transparent ${red + yellow}deg ${red + yellow + 10}deg,
    white ${red + yellow + 10}deg ${yellow + white}deg
    )`;
  const display_ship_system_info = (shipSystemName: string) => {
    console.log(shipSystemName);
  };
  return (
    <>
      <td className="pl-4 py-2">{name}</td>
      {showDetails ? (
        <>
          {Object.entries({
            red,
            yellow,
            white,
          }).map(([color], i) => (
            <td
              key={i}
              className={`text-center !border-b-[3px] w-[32px]`}
              style={{ borderBottomColor: colors[color] }}>
              <div>{shipColors[color]}</div>
            </td>
          ))}
          <td id="s_info_icon" onClick={() => display_ship_system_info(name)}>
            <img src={SInfoIcon} className="mx-auto" />
          </td>
        </>
      ) : (
        <td>
          {[
            faded_alarms,
            suppressed_alarms,
            invalid_states,
            active_alarms,
          ].reduce((a, c) => a + c, 0) === 0 ? (
            <div className="w-[30px] h-[30px] border-[4.5px] border-positive-500 rounded-full mx-auto" />
          ) : (
            <div
              className="mx-auto"
              style={{
                width: "30px",
                height: "30px",
                background,
                WebkitMaskImage: "radial-gradient(transparent 50%, black 55%)",
                maskImage: "radial-gradient(transparent 50%, black 55%)",
                borderRadius: "50%",
              }}
            />
          )}
        </td>
      )}
    </>
  );
};

export default SystemShip;
