import { version } from "../package.json";
import packAFunc from "lerna-drone-nest-poc-pack-a";

export default function packBFunc() {
    console.log("pack-b version: ", version);
}
