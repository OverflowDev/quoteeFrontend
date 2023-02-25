import { gql } from "@apollo/client";

export const FETCH_QUOTES_QUERY = gql`
    query QuotesQuery {
        getQuotes {
            id
            username
            body
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
export const FETCH_QUOTE_QUERY = gql`
    query QuoteQuery($quoteId: ID!) {
        getQuote(quoteId: $quoteId) {
            id
            username
            body
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

