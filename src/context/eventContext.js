import { createContext } from "react";

export const DEFAULT_EVENTS = [];

const EventContext = createContext({
  events: DEFAULT_EVENTS,
  setEvents: () => {},
});

export default EventContext;
