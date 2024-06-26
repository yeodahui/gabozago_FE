import * as S from "./style";
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil";

import OptionsIcon from "../../../assets/icons/options.svg?react";
import DeleteIcon from "../../../assets/icons/x.svg?react";
import FilterButton from "../FilterButton";
import Filter from "../filterInputs/Filter";

import {
  TFilter,
  activeJournalFilterListState,
  defaultFilter,
} from "../../../recoil/journals/journalState";
import { modalState } from "../../../recoil/modalState";

export type TFilterName =
  | "sort"
  | "location"
  | "headCount"
  | "duration"
  | "season"
  | "theme"
  | "budget";
interface Props {
  filters: TFilterName[];
  filterState: TFilter;
  filterSetState: SetterOrUpdater<TFilter>;
}

function FilterList({
  filters,
  filterState: filter,
  filterSetState: setFilter,
}: Props) {
  const setModal = useSetRecoilState(modalState);
  const filterTypeMap = {
    sort: "정렬",
    location: "지역",
    headCount: "인원",
    duration: "일정",
    season: "계절",
    theme: "테마",
    budget: "경비",
  };
  const activeFilters = useRecoilValue(activeJournalFilterListState);
  const deleteFilterChip = (type: keyof TFilter, value: string): void => {
    setFilter((prev) => {
      switch (type) {
        case "season":
          if (
            prev.season.includes("사계절") ||
            (prev.season.includes("봄") &&
              prev.season.includes("여름") &&
              prev.season.includes("가을") &&
              prev.season.includes("겨울"))
          ) {
            return {
              ...prev,
              season: [],
            };
          } else {
            return {
              ...prev,
              season: prev[type].filter((item) => item !== value),
            };
          }
          break;

        case "location":
        case "theme":
          return {
            ...prev,
            [type]: prev[type].filter((item) => item !== value),
          };
          break;

        case "headCount":
        case "duration":
        case "budget":
        case "sort":
          return { ...prev, [type]: defaultFilter[type] };
          break;
      }

      return prev;
    });
  };
  const filterButtonClickHandler = (item: TFilterName) => {
    setModal(() => ({
      title: filterTypeMap[item],
      isOpend: true,
      contents: (
        <Filter
          type={item}
          filterState={filter}
          filterSetState={setFilter}
          setModal={setModal}
        />
      ),
    }));
  };

  return (
    <>
      <S.FilterList>
        <S.FilterItem>
          <S.AllFilterButton onClick={() => alert("전체 필터 보기")}>
            <OptionsIcon />
          </S.AllFilterButton>
        </S.FilterItem>
        {filters.map((item) => (
          <S.FilterItem>
            <FilterButton
              name={filterTypeMap[item]}
              type={item}
              onClick={() => {
                filterButtonClickHandler(item);
              }}
            />
          </S.FilterItem>
        ))}
      </S.FilterList>
      <S.ActiveFilterList>
        {activeFilters.map(({ type, value }) => (
          <S.ActiveFilterChip
            onClick={() => {
              deleteFilterChip(type, value);
            }}
          >
            {value}
            <DeleteIcon />
          </S.ActiveFilterChip>
        ))}
      </S.ActiveFilterList>
    </>
  );
}

export default FilterList;
