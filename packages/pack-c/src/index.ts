import { version } from "../package.json";
import packAFunc from "lerna-drone-nest-poc-pack-a";

export default function packCFunc() {
    packAFunc();
    console.log("pack-c version: ", version);
}
