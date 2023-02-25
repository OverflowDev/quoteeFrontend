import { gql } from "@apollo/client";

export const CREATE_QUOTE_MUTATION = gql`
    mutation CreateQuoteMutation($body: String!) {
        createQuote(body: $body) {
            id
            body
            username
            createdAt
            likeCount
            likes{
                username
            }
            commentCount
            comments {
                id
                username
                body
                createdAt
            }
        }
    }
`

