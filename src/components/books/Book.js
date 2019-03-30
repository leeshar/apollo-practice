import React from "react";

const Book = props =>
  props.data.map((item, index) => (
    <div className="book" key={index}>
      <h3>제목 ---- {item.title}</h3>
      <h4>저자 ---- {item.author}</h4>
      <h6>가격 - {item.price}</h6>
      <img src={item.img_path} alt="책 이미지" />
    </div>
  ));
export default Book;
