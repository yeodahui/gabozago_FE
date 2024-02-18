import { atom, selector } from "recoil";
import { DayPlan, Trip } from "../assets/data/tripPlanData";

export const tripState = atom<Trip>({
  key: "tripState",
  default: {
    title: "즐거운 부산 여행",
    departureDate: new Date("2024-12-20"), // 출발
    arrivalDate: new Date("2024-12-23"), // 도착
    days: 4,
    transport: "대중교통",
    plan: [
      {
        day: 1,
        date: new Date("2024-12-20"),
        dayOfWeek: "수",
        route: [
          {
            placeName: "더베이베이커리",
            theme: "베이커리",
            placeId: 1232132131,
            position: { lat: 35.134576, lng: 129.10254 },
            memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
            transport: "도보",
            travelTime: "1시간 10분",
          },
          {
            placeName: "장소명",
            theme: "테마",
            placeId: 1232132131,
            position: { lat: 35.13, lng: 129.10254 },
            placeImage: "https://placehold.co/300x300/orange/white",
            memo: "",
            transport: "",
            travelTime: "15분",
          },
          {
            placeName: "장소명",
            theme: "테마",
            placeId: 1232132131,
            position: { lat: 35.13457, lng: 129.1 },
            placeImage: "https://placehold.co/300x300/orange/white",
            memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            transport: "",
            travelTime: "",
          },
        ],
      },
      {
        day: 2,
        date: new Date("2024-12-21"),
        dayOfWeek: "목",
        route: [
          {
            placeName: "랄라베이커리",
            theme: "베이커리",
            placeId: 1232132131,
            position: { lat: 35.124576, lng: 129.10254 },
            memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
            transport: "도보",
            travelTime: "1시간 10분",
          },
          {
            placeName: "장소명2",
            theme: "테마",
            placeId: 1232132131,
            position: { lat: 35.13, lng: 129.08254 },
            placeImage: "https://placehold.co/300x300/orange/white",
            memo: "",
            transport: "",
            travelTime: "15분",
          },
          {
            placeName: "장소명3",
            theme: "테마",
            placeId: 1232132131,
            position: { lat: 35.135, lng: 129.1 },
            placeImage: "https://placehold.co/300x300/orange/white",
            memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            transport: "",
            travelTime: "",
          },
        ],
      },
      {
        day: 3,
        date: new Date("2024-12-22"),
        dayOfWeek: "목",
        route: [],
      },
      {
        day: 4,
        date: new Date("2024-12-23"),
        dayOfWeek: "토",
        route: [],
      },
    ],
  },
});

export const tripInfoState = selector({
  key: "tripInfoState",
  get: ({ get }) => {
    const trip = get(tripState);

    return {
      title: trip.title,
      departureDate: trip.departureDate,
      arrivalDate: trip.arrivalDate,
      days: trip.days,
      transport: trip.transport,
    };
  },
});

// @todo: 추후 비동기 데이터 쿼리로 수정 필요
export const tripPlanState = atom<DayPlan[]>({
  key: "tripPlanState",
  default: [
    {
      day: 1,
      date: new Date("2024-12-20"),
      dayOfWeek: "수",
      route: [
        {
          placeName: "더베이베이커리",
          theme: "베이커리",
          placeId: 1232132131,
          position: { lat: 35.134576, lng: 129.10254 },
          memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
          transport: "도보",
          travelTime: "1시간 10분",
        },
        {
          placeName: "장소명",
          theme: "테마",
          placeId: 1232132131,
          position: { lat: 35.13, lng: 129.10254 },
          placeImage: "https://placehold.co/300x300/orange/white",
          memo: "",
          transport: "",
          travelTime: "15분",
        },
        {
          placeName: "장소명",
          theme: "테마",
          placeId: 1232132131,
          position: { lat: 35.13457, lng: 129.1 },
          placeImage: "https://placehold.co/300x300/orange/white",
          memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          transport: "",
          travelTime: "",
        },
      ],
    },
    {
      day: 2,
      date: new Date("2024-12-21"),
      dayOfWeek: "목",
      route: [
        {
          placeName: "랄라베이커리",
          theme: "베이커리",
          placeId: 1232132131,
          position: { lat: 35.124576, lng: 129.10254 },
          memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ",
          transport: "도보",
          travelTime: "1시간 10분",
        },
        {
          placeName: "장소명2",
          theme: "테마",
          placeId: 1232132131,
          position: { lat: 35.13, lng: 129.08254 },
          placeImage: "https://placehold.co/300x300/orange/white",
          memo: "",
          transport: "",
          travelTime: "15분",
        },
        {
          placeName: "장소명3",
          theme: "테마",
          placeId: 1232132131,
          position: { lat: 35.135, lng: 129.1 },
          placeImage: "https://placehold.co/300x300/orange/white",
          memo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          transport: "",
          travelTime: "",
        },
      ],
    },
    {
      day: 3,
      date: new Date("2024-12-22"),
      dayOfWeek: "목",
      route: [],
    },
    {
      day: 4,
      date: new Date("2024-12-23"),
      dayOfWeek: "토",
      route: [],
    },
  ],
});
