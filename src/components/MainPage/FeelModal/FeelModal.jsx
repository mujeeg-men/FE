import { faX } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Common/Input";
import ModalSearch from "./ModalSearch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const FeelModal = ({ closeModal }) => {
  useEffect(() => {
    // 모달이 열릴 때 body 스크롤 막기
    document.body.style.overflow = "hidden";

    return () => {
      // 모달이 닫힐 때 원상복구
      document.body.style.overflow = "auto";
    };
  }, []);

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
        <ModalSearch />
        <Input label={"읽은 페이지 수"}></Input>
        <Input label={"소감"}></Input>
      </div>
    </div>
  );
};

export default FeelModal;
