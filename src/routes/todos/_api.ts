import type { Request } from "@sveltejs/kit"

let todos: Todo[] = []

export const api =(request: Request, todo?: Todo)=> {
    
    let body = {}
    let status = 500
    let headers = {}

    switch(request.method.toUpperCase()) {
        case "GET" : {
            body = todos
            status = 200
            break;
        }
        case "POST" : {
            todos.push(todo)
            status = 303
            headers = {

                location: "/"
            }
            
        }
        default: {
            break;
        }
    }
    return {
status, body
    }
}