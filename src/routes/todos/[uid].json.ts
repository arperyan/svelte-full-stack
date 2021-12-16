import type { RequestHandler } from "@sveltejs/kit"

export const del: RequestHandler = (request) => {
    return {
        status: 200,
        body: request.params.uid
    }
}