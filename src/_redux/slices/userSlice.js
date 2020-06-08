import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    userData: {
      name: "Артем Гомельский",
      position: "Маркетолог-аналитик",
      info: "Москва, МО 34 года",
      image:
        "https://img.freepik.com/free-vector/vector-pop-art-illustration-brutal-bearded-man-macho-with-tatoo_1441-376.jpg?size=338&ext=jpg",
      price: "90,000",
      experience: [
        {
          logo:
            "https://datatocapital.com/wp-content/uploads/2018/05/slack-logo.png",
          time: "3 года, 2 месяца",
          position: "Маркетинг-аналитик",
        },
        {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Beeline.svg/1200px-Beeline.svg.png",
          time: "2 года, 9 месяцев",
          position: "Маркетолог",
        },
      ],
      skills: [
        "UX/UI Design",
        "Проектирование мобильных интерфейсов",
        "SCRUM",
        "User centered design",
        "Figma",
        "Sketch",
        "Adobe CC",
      ],
    },
  },
  reducers: {},
});

export const selectUserData = (state) => state.user.userData;

export default slice.reducer;
