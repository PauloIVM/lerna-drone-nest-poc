import { version } from "../package.json";
import * as auth from "lerna-poc-pack-auth";

export default function getStudents() {
    console.log("pack-b version: ", version);
    return [
        { id: "1", foo: "bar" },
        { id: "2", foo: "bar" },
        { id: "3", foo: "bar" },
        { id: "4", foo: "bar" },
    ];
}
