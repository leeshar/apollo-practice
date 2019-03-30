import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Book from "components/books/Book";
import Loading from "components/loading/Loading";

const GET_BOOKLIST = gql`
  query {
    books {
      title
      author
      price
      content
      img_path
    }
  }
`;

export default class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <Query query={GET_BOOKLIST}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>error</p>;
            return <Book data={data.books} />;
          }}
        </Query>
      </div>
    );
  }
}
