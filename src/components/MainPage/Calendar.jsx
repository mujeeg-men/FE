import { useEffect, useState } from "react";
import {
  CalendarArrow,
  CalendarContainer,
  CalendarDateWrapper,
  CalendarWeekWrapper,
} from "./Calendar.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { feelData } from "@/assets/data/temp";
import COLOR from "@/constants/color";

const Calendar = ({setPickDate}) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 현재 달의 첫 날
  const firstDayOfMonth = new Date(year, month, 1);
  // 달력 시작 날짜를 현재 달의 첫 날의 주의 일요일로 설정
  const startDay = new Date(firstDayOfMonth);
  startDay.setDate(1 - firstDayOfMonth.getDay());

  // 현재 달의 마지막 날
  const lastDayOfMonth = new Date(year, month + 1, 0);
  // 달력 끝 날짜를 현재 달의 마지막 날의 주의 토요일로 설정
  const endDay = new Date(lastDayOfMonth);
  endDay.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

  /** startDay부터 endDay까지의 날짜를 주 단위로 그룹화하는 함수 */
  const groupDatesByWeek = (startDay, endDay) => {
    const weeks = []; // 최종적으로 주 단위로 그룹화된 날짜 배열들을 저장할 배열
    let currentWeek = []; // 현재 처리 중인 주를 나타내는 배열
    let currentDate = new Date(startDay); // 반복 처리를 위한 현재 날짜 변수, 시작 날짜로 초기화

    // 시작 날짜부터 끝 날짜까지 반복
    while (currentDate <= endDay) {
      // 배열로 push 한 건 현재 달과 전 달 다음 달 구분을 위해 넣음
      currentWeek.push([new Date(currentDate), 0]); // 현재 날짜를 현재 주에 추가
      // 현재 주가 7일을 모두 채웠거나 현재 날짜가 토요일인 경우
      if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek); // 완성된 주를 weeks 배열에 추가
        currentWeek = []; // 새로운 주를 시작하기 위해 currentWeek을 재초기화
      }
      currentDate.setDate(currentDate.getDate() + 1); // 현재 날짜를 다음 날로 변경
    }

    // 첫 주 처리(전 달 보이게)
    if (weeks[0].length < 7) {
      let tempDate = 0;
      while (weeks[0].length !== 7) {
        // 배열로 push 한 건 현재 달과 전 달 다음 달 구분을 위해 넣음
        weeks[0] = [[new Date(year, month, tempDate), 1], ...weeks[0]];
        tempDate--;
      }
    }

    // 마지막 주 처리 (만약 남아있다면)
    if (currentWeek.length > 0) {
      // 다음 달 날짜까지
      let tempDate = 1;
      while (currentWeek.length !== 7) {
        // 배열로 push 한 건 현재 달과 전 달 다음 달 구분을 위해 넣음
        if (month > 11) {
          currentWeek.push([new Date(year + 1, 0, tempDate), 1]);
        } else {
          currentWeek.push([new Date(year, month + 1, tempDate), 1]);
        }
        tempDate++;
      }
      weeks.push(currentWeek); // 남아 있는 날짜가 있다면 마지막 주로 weeks에 추가
    }

    return weeks; // 주 단위로 그룹화된 날짜 배열들을 반환
  };

  const handlePrevMonth = () => {
    // 이전 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    // 다음 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // 년월일 추출 함수
  const getYearMonthDate = (data) => {
    const year = data.getFullYear();
    const month = data.getMonth();
    const date = data.getDate();

    return `${year} ${month} ${date}`;
  };

  return (
    <CalendarContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CalendarArrow
          onClick={() => {
            handlePrevMonth();
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="xl" color="gray" />
        </CalendarArrow>
        <span>{`${currentDate.getFullYear()}년 ${
          currentDate.getMonth() + 1
        }월`}</span>
        <CalendarArrow
          onClick={() => {
            handleNextMonth();
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} size="xl" color="gray" />
        </CalendarArrow>
      </div>

      <CalendarWeekWrapper>
        {days.map((day) => (
          <CalendarDateWrapper style={{ pointerEvents: "none" }}>
            <span>{day}</span>
          </CalendarDateWrapper>
        ))}
      </CalendarWeekWrapper>
      {groupDatesByWeek(firstDayOfMonth, lastDayOfMonth).map((week) => {
        return (
          <CalendarWeekWrapper key={week}>
            {week.map((date) => {
              return (
                <CalendarDateWrapper
                  key={date}
                  style={{ color: date[1] === 1 && "gray" }}
                  // 날짜 선택 부분분
                  onClick={()=>{setPickDate(date[0])}}
                >
                  {/* 소감 데이터에서 현재 날짜가 있는 지 찾는 로직 */}
                  {feelData.find(
                    (item) =>
                      getYearMonthDate(new Date(item.feelDate)) ==
                      getYearMonthDate(date[0])
                  ) != undefined ? (
                    <span
                      style={{
                        backgroundColor: COLOR.defalutColor,
                        color: "white",
                      }}
                    >
                      {date[0].getDate()}
                    </span>
                  ) : (
                    <span>{date[0].getDate()}</span>
                  )}
                </CalendarDateWrapper>
              );
            })}
          </CalendarWeekWrapper>
        );
      })}
    </CalendarContainer>
  );
};

export default Calendar;
