import { gql } from "@apollo/client";

export const SUBMIT_COMMENT_MUTATION = gql`
    mutation submitComment($quoteId: ID!, $body: String!){
        createComment(quoteId: $quoteId, body: $body) {
            id
            comments{
                id
                body
                username
                createdAt
            }
            commentCount
        }
    }
`