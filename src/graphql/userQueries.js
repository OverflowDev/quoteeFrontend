import { gql } from "@apollo/client";


export const REGISTER_USER = gql`
    mutation register(
        $name: String!
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                name: $name
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ) {
            id
            email
            name
            username
            createdAt
            token
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            id
            email
            name
            username
            createdAt
            token
        }
    }
`