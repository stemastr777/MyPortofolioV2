
import { getPlaiceholder } from "plaiceholder";


const ImagetoBase64 = async (url) => {

    const buffer = await fetch(url).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    return (base64);
}

export { ImagetoBase64 }