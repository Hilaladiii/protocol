"use client";

import { useEffect, useState } from "react";

export type RobotStatus = "idle" | "processing" | "completed";

export interface RobotState {
  message: string;
  isVisible: boolean;
  status: RobotStatus;
}

class RobotStore {
  private state: RobotState = {
    message: "Hello! I am ready to help you build your project architecture.",
    isVisible: false,
    status: "idle",
  };
  private listeners = new Set<(state: RobotState) => void>();

  getState() {
    return this.state;
  }

  subscribe(listener: (state: RobotState) => void) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  setMessage(message: string, isVisible = true, status: RobotStatus = "idle") {
    this.state = { message, isVisible, status };
    this.notify();
  }

  show(message: string, status: RobotStatus = "idle") {
    this.state = { ...this.state, message, isVisible: true, status };
    this.notify();
  }

  hide() {
    this.state = { ...this.state, isVisible: false };
    this.notify();
  }
}

export const robotStore = new RobotStore();

export function useRobot() {
  const [state, setState] = useState(() => robotStore.getState());

  useEffect(() => {
    setState(robotStore.getState());
    return robotStore.subscribe(setState);
  }, []);

  return state;
}
