import { gql } from "@apollo/client";

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: Sting!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password) {
            token
            user {
                _id
                username
            }
        }
    }
`
export const SAVE_BOOK = gql`
    mutation savedBook($body: savedBooks){
        savedBook(body: $body) {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                description
                image
                link
                title
                bookId
            }
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation removeBook(bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                description
                image
                link
                title
                bookId
            }
        }
    }
`