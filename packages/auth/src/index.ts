import { version } from "../package.json";

export default function authenticate(): boolean {
    console.log("auth-pack version: ", version);
    return true;
}
