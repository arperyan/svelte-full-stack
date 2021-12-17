import type { Request } from "@sveltejs/kit";

let todos: Todo[] = [];

export const api = (request: Request, todo?: Todo) => {
    let body = {};
    let status = 500;
    let headers = {};

    switch (request.method.toUpperCase()) {
        case "GET": {
            body = todos;
            status = 200;
            break;
        }
        case "POST": {
            todos.push(todo);
            status = 201;
            body = todo;
        }
        case "DELETE": {
            todos = todos.filter((todo) => todo.uid !== request.params.uid);
            status = 200;
        }
        default: {
            break;
        }
    }

    if (request.method.toUpperCase() !== "GET") {
        return {
            status: 303,
            headers: {
                location: "/",
            },
        };
    }
    return {
        status,
        body,
    };
};
