import * as S from "../../styles/tripDetail/DayPlanEdit.style";
import { DayPlan, Place } from "../../assets/data/tripPlanData";
import EditablePlaceItem from "./EditablePlaceItem";
import { ItemInterface, ReactSortable } from "react-sortablejs";
import { SetterOrUpdater } from "recoil";
import { useEffect, useState } from "react";

interface Props {
  day: number;
  route: Place[];
  setPlan: SetterOrUpdater<DayPlan[]>;
}
type SortableRoute = ItemInterface & Place;
function DayPlanEdit({ day, route: routeProp, setPlan }: Props) {
  const [route, setRoute] = useState<SortableRoute[]>([]);

  useEffect(() => {
    setRoute(
      routeProp.map((place) => ({ ...place, chosen: false, id: place.placeId }))
    );
  }, [routeProp]);

  return (
    <S.Container>
      <S.DaySpan>Day {day}</S.DaySpan>
      <S.PlaceList>
        <ReactSortable group={"dayPlan"} list={route} setList={setRoute}>
          {route.map((item, index) => (
            <EditablePlaceItem key={item.id} place={item} index={index} />
          ))}
        </ReactSortable>
      </S.PlaceList>
    </S.Container>
  );
}

export default DayPlanEdit;
