
export function normalizeLink(response) {
    try {

        // ожидаем { url, engine, voice, format }
        if (!response.url) {
            throw new Error("url отсутствует в ответе");
        }

        return {
            url: response.url,
            engine: response.engine ?? "unknown",
            format: response.format ?? "mp3"
        };


    } catch (e) {
        console.error("Неверный формат ответа от сервера:", e, response);
        return null;
    }
}
