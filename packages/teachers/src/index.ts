import { version } from "../package.json";

export default function getTeachers() {
    console.log("pack-c version: ", version);
    return [
        { id: "1", foo: "bar" },
        { id: "2", foo: "bar" },
        { id: "3", foo: "bar" },
        { id: "4", foo: "bar" },
    ];
}
