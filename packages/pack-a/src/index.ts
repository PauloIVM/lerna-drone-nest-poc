import { version } from "../package.json";

export default function getPackAVersion(): string {
    console.log("pack-a version: ", version);
    return version;
}
