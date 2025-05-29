import { faX } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Common/Input";
import ModalSearch from "./ModalSearch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Button from "@/components/Common/Button";
import { postBookFeel } from "@/apis/api/user/userBook";
import { pickedDateState } from "@/store/feel.store";
import { useRecoilState } from "recoil";
import { formattedDate } from "@/utils/fomattedData";

const FeelModal = ({ closeModal }) => {
  const [bookId, setBookId] = useState("");
  const [pageRead, setPageRead] = useState("");
  const [comment, setComment] = useState("");

  const [pickedDate, setPickedDate] = useRecoilState(pickedDateState);
  const [tempDate, setTempDate] = useState(pickedDate);

  useEffect(() => {
    // 모달이 열릴 때 body 스크롤 막기
    document.body.style.overflow = "hidden";

    return () => {
      // 모달이 닫힐 때 원상복구
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const formatted = formattedDate(pickedDate);
    setTempDate(formatted);
  }, [pickedDate]);

  const clickHandler = async (bookId, pickedDate, pageRead, comment) => {
    try {
      // console.log(bookId, pickedDate, pageRead, comment)
      const res = await postBookFeel(bookId, pickedDate, pageRead, comment);
      console.log(res)
    } catch (error) {
      console.error("리뷰 저장 에러:", error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#00000050",
        zIndex: 9999,
        padding: "150px 300px",
      }}
      onClick={closeModal}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 50,
          borderRadius: 5,
          position: "relative",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FontAwesomeIcon
          icon={faX}
          style={{
            position: "absolute",
            right: 15,
            top: 15,
            cursor: "pointer",
          }}
          onClick={closeModal}
        />
        <ModalSearch setBookId={setBookId} />
        <Input
          type={"date"}
          value={tempDate}
          onChange={(e) => {
            setTempDate(e.target.value);
          }}
          label={"날짜"}
        />
        <Input
          value={pageRead}
          onChange={(e) => {
            setPageRead(e.target.value);
          }}
          label={"읽은 페이지 수"}
        ></Input>
        <Input
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          label={"소감"}
        ></Input>

        <Button
          func={() => {
            clickHandler(bookId, pickedDate, pageRead, comment);
          }}
        >
          등록하기
        </Button>
      </div>
    </div>
  );
};

export default FeelModal;
