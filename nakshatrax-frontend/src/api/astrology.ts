import axios from "axios"
import { KundliInput, KundliResult } from "../types/api"

const BASE = "/api/astrology"

export const createKundli = async (
    data: KundliInput
): Promise<KundliResult> => {
    const res = await axios.post(`${BASE}/kundli`, data)
    return res.data
}