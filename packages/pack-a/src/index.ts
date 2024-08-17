import { version } from "../package.json";

export default function getPackAVersion() {
    console.log("pack-a version: ", version);
    return version;
}
