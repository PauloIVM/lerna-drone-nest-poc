import { version } from "../package.json";

export default function getPackAVersion() {
    console.log("changed pack-a version: ", version);
    return version;
}
