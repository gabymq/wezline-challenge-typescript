import { ClientFunction } from "testcafe";

export const getWindowLocation = ClientFunction(()=>window.location.href)