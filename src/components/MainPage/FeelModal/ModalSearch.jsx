import Input from "@/components/Common/Input";
import { bookData } from "@/assets/data/temp";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { myInterestBookState } from "@/store/user.store";
import { pickedDateState } from "@/store/feel.store";

const ModalSearch = ({setBookId}) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilterdData] = useState([]);
  const [pickedBook, setPickedBook] = useState({});

  const [myInterestBook, setMyInterestBook] =
    useRecoilState(myInterestBookState);

  const filterBookData = (text) => {
    if (text == "") return myInterestBook;

    const temp = myInterestBook.filter((item) => item.bookName.includes(text));
    if (temp.length === 0) return [];
    return temp;
  };

  const clickedHandler = (object) => {
    // console.log(object)
    setPickedBook(object);
    setBookId(object.bookId)
    setFilterdData([]);
  };

  return (
    <div style={{ position: "relative" }}>
      <Input
        onChange={(e) => {
          const value = e.target.value;
          setSearchText(value);
          setFilterdData(filterBookData(value));
        }}
        label={"책 검색"}
        onFocus={(e) => {
          const value = e.target.value;
          setFilterdData(filterBookData(value));
        }}
      />

      {filteredData.length > 0 && (
        <div
          style={{
            position: "absolute",
            height: 200,
            overflow: "auto",
            top: 65,
            background: "white",
            width: "100%",
          }}
        >
          {filteredData.map((item, index) => {
            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  clickedHandler(item);
                }}
                key={index}
              >
                <img src={item.bookImageUrl} alt="" style={{ width: 50 }} />
                {item.bookName}
              </div>
            );
          })}
        </div>
      )}
      <div style={{ height: 100 }}>
        <img src={pickedBook.bookImageUrl} alt="" style={{ width: 50 }} />
        {pickedBook.bookName}
      </div>
    </div>
  );
};

export default ModalSearch;
