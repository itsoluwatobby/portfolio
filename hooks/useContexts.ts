"use client"

import { AppContext } from "@/context/AppContext"
import { Context, useContext } from "react"

export const useAppContext = () => useContext<AppContextProps>(AppContext as Context<AppContextProps>)