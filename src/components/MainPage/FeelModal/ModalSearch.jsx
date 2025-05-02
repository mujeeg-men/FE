import Input from "@/components/Common/Input";
import { bookData } from "@/assets/data/temp";
import { useState } from "react";

const ModalSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilterdData] = useState([]);
  const [pickedBook, setPickedBook] = useState({});

  const filterBookDaTa = (text) => {
    if (text == "") return [];
    return bookData.filter((item) => item.title.includes(text));
  };

  const clickedHandler = (object) => {
    setPickedBook(object);
    setFilterdData([]);
  };

  return (
    <div style={{ position: "relative" }}>
      <Input
        onChange={(e) => {
          const value = e.target.value;
          setSearchText(value);
          setFilterdData(filterBookDaTa(value));
        }}
        label={"책 검색"}
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
          {filteredData.map((item) => {
            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  clickedHandler(item);
                }}
              >
                <img src={item.cover} alt="" style={{ width: 50 }} />
                {item.title}
              </div>
            );
          })}
        </div>
      )}
      <div style={{height: 100}}>
        <img src={pickedBook.cover} alt="" style={{ width: 50 }} />
        {pickedBook.title}
      </div>
    </div>
  );
};

export default ModalSearch;
