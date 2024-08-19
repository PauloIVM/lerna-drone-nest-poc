import { version } from "../package.json";
import auth from "lerna-poc-pack-auth";

export default function getTeachers() {
    if (!auth()) return;
    console.log("pack-c version: ", version);
    return [
        { id: "1", foo: "bar" },
        { id: "2", foo: "bar" },
        { id: "3", foo: "bar" },
        { id: "4", foo: "bar" },
    ];
}
