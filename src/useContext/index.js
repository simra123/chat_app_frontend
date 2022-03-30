import { createContext } from "react";

const globleState = {
    name: "",
    showChat: false,
    messages: []
}

export const User = createContext(globleState.name)
export const ChatVisibility = createContext(globleState.showChat)
export const AllMessages = createContext(globleState.messages)