import { version } from "../package.json";

export default function getPackAVersion() {
    console.log("some chnage pack-a version: ", version);
    return version;
}
