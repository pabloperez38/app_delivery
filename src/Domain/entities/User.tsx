export interface User {
    id?:                string;
    name:              string;
    email:             string;
    phone:             string;
    password:          string;
    confirmarPassword: string;
    session_token?:     string;
}