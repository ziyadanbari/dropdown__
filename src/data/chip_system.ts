/*
  NOTICE!!!!!!!!!!!

  I've added faded_alarms, suppressed_alarms, invalid_states and active_alarms,
  to complete this task,
  because I don't have enough information about this numbers

*/

import { Data } from "../types";

export default {
  columns: [
    {
      index: 1,
      systems: [
        {
          system_group: "System A",
          ship_systems: [
            {
              name: "Ship System A1",
              faded_alarms: 0,
              suppressed_alarms: 0,
              invalid_states: 0,
              active_alarms: 0,
            },
            {
              name: "Ship System A2",
              faded_alarms: 5,
              suppressed_alarms: 18,
              invalid_states: 3,
              active_alarms: 9,
            },
            {
              name: "Ship System A3",
              faded_alarms: 8,
              suppressed_alarms: 11,
              invalid_states: 16,
              active_alarms: 4,
            },
          ],
        },
        {
          system_group: "System B",
          ship_systems: [
            {
              name: "Ship System B1",
              faded_alarms: 0,
              suppressed_alarms: 0,
              invalid_states: 0,
              active_alarms: 0,
            },
            {
              name: "Ship System B2",
              faded_alarms: 10,
              suppressed_alarms: 13,
              invalid_states: 15,
              active_alarms: 30,
            },
          ],
        },
      ],
    },
    {
      index: 2,
      systems: [
        {
          system_group: "System C",
          ship_systems: [
            {
              name: "Ship System C1",
              faded_alarms: 15,
              suppressed_alarms: 4,
              invalid_states: 7,
              active_alarms: 11,
            },
            {
              name: "Ship System C2",
              faded_alarms: 9,
              suppressed_alarms: 16,
              invalid_states: 5,
              active_alarms: 20,
            },
            {
              name: "Ship System C3",
              faded_alarms: 3,
              suppressed_alarms: 12,
              invalid_states: 18,
              active_alarms: 8,
            },
          ],
        },
      ],
    },
    {
      index: 3,
      systems: [
        {
          system_group: "System D",
          ship_systems: [
            {
              name: "Ship System D1",
              faded_alarms: 10,
              suppressed_alarms: 19,
              invalid_states: 6,
              active_alarms: 13,
            },
            {
              name: "Ship System D2",
              faded_alarms: 4,
              suppressed_alarms: 15,
              invalid_states: 11,
              active_alarms: 2,
            },
          ],
        },
        {
          system_group: "System E",
          ship_systems: [
            {
              name: "Ship System E1",
              faded_alarms: 14,
              suppressed_alarms: 5,
              invalid_states: 17,
              active_alarms: 3,
            },
            {
              name: "Ship System E2",
              faded_alarms: 7,
              suppressed_alarms: 18,
              invalid_states: 9,
              active_alarms: 16,
            },
            {
              name: "Ship System E3",
              faded_alarms: 2,
              suppressed_alarms: 12,
              invalid_states: 8,
              active_alarms: 20,
            },
          ],
        },
      ],
    },
    {
      index: 4,
      systems: [
        {
          system_group: "System F",
          ship_systems: [
            {
              name: "Ship System F1",
              faded_alarms: 10,
              suppressed_alarms: 2,
              invalid_states: 10,
              active_alarms: 17,
            },
            {
              name: "Ship System F2",
              faded_alarms: 8,
              suppressed_alarms: 3,
              invalid_states: 19,
              active_alarms: 10,
            },
            {
              name: "Ship System F3",
              faded_alarms: 11,
              suppressed_alarms: 7,
              invalid_states: 10,
              active_alarms: 18,
            },
          ],
        },
      ],
    },
  ],
} as Data;
