export interface ShipSystem {
  name: string;
  faded_alarms: number;
  suppressed_alarms: number;
  invalid_states: number;
  active_alarms: number;
}

export interface SystemGroup {
  system_group: string;
  ship_systems: ShipSystem[];
}

export interface Column {
  index: number;
  systems: SystemGroup[];
}

export interface Data {
  columns: Column[];
}
