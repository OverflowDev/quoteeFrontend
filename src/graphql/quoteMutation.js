import { gql } from "@apollo/client";

export const CREATE_QUOTE_MUTATION = gql`
    mutation createQuote($body: String!) {
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

export const LIKE_QUOTE_MUTATION = gql`
    mutation likeQuoteMutation($quoteId: ID!) {
        likeQuote(quoteId: $quoteId) {
            id
            likes {
                id
                username
            }
            likeCount
        }
    }
`

export const DELETE_QUOTE_MUTATION = gql`
    mutation DeleteQuoteMutation($quoteId: ID!) {
        deleteQuote(quoteId: $quoteId) {
            id
        }
    }
`

