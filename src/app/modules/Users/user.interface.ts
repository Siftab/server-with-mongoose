

export type TUser = {
    id: string,
    password: string,
    needsPasswordChange: boolean,
    role: "admin" | "stdudent" | "faculty ",
    status: "in-progress" | "blocked"
    isDeleted: boolean,
    isUpadted: boolean
}