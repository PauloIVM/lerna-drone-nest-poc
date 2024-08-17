import { version } from "../package.json";

// Testar na raiz:
// npm publish --access=public

// INFO: Talvez seja melhor simplesmente usar o workspaces do yarn mesmo. Parece q tbm tem controle de versão.
//       Estudar mais sobre...

export default function getPackAVersion() {
    console.log("some chnage pack-a version: ", version);
    return version;
}
